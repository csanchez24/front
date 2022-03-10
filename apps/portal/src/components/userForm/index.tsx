import { Skeleton } from '@mantine/core';
import {
  useProfileQuery,
  useUpdateGener02Mutation,
} from '@front/generales/shared/gql';
import { EditInput } from '../base/editInput';

export const UserForm: React.FC = () => {
  const { data, loading } = useProfileQuery();
  const [updateGener02] = useUpdateGener02Mutation();

  const updateFirstName = (value: string) => {
    updateGener02({
      variables: {
        updateGener02Input: {
          id: parseInt(data!.getProfile.id),
          firstName: value,
        },
      },
    });
  };

  const updateLastName = (value: string) => {
    updateGener02({
      variables: {
        updateGener02Input: {
          id: parseInt(data!.getProfile.id),
          lastName: value,
        },
      },
    });
  };

  const updateEmail = (value: string) => {
    updateGener02({
      variables: {
        updateGener02Input: {
          id: parseInt(data!.getProfile.id),
          email: value,
        },
      },
    });
  };

  console.log(data);
  return (
    <Skeleton visible={loading}>
      <div>
        <EditInput
          label="First Name"
          value={data?.getProfile.firstName ?? ''}
          inputType="text"
          onSave={updateFirstName}
        />
        <EditInput
          label="Last Name"
          value={data?.getProfile.lastName ?? ''}
          inputType="text"
          onSave={updateLastName}
        />
        <EditInput
          label="Email"
          value={data?.getProfile.email ?? ''}
          inputType="text"
          onSave={updateEmail}
        />
      </div>
    </Skeleton>
  );
};
