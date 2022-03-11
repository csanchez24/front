import { Skeleton } from '@mantine/core';
import {
  useProfileQuery,
  useUpdateUserMutation,
} from '@front/generales/shared/gql';
import { EditInput } from '../base/editInput';

export const UserForm: React.FC = () => {
  const { data, loading } = useProfileQuery();
  const [updateGener02] = useUpdateUserMutation();

  const updateFirstName = (value: string) => {
    updateGener02({
      variables: {
        updateUserInput: {
          id: parseInt(data!.getProfile.id),
          first_name: value,
        },
      },
    });
  };

  const updateLastName = (value: string) => {
    updateGener02({
      variables: {
        updateUserInput: {
          id: parseInt(data!.getProfile.id),
          last_name: value,
        },
      },
    });
  };

  const updateEmail = (value: string) => {
    updateGener02({
      variables: {
        updateUserInput: {
          id: parseInt(data!.getProfile.id),
          email: value,
        },
      },
    });
  };

  return (
    <Skeleton visible={loading}>
      <div>
        <EditInput
          label="First Name"
          value={data?.getProfile.first_name ?? ''}
          inputType="text"
          onSave={updateFirstName}
        />
        <EditInput
          label="Last Name"
          value={data?.getProfile.last_name ?? ''}
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
