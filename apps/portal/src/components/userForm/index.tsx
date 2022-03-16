import { Skeleton } from '@mantine/core';
import {
  Languague,
  useProfileQuery,
  useUpdateUserMutation,
} from '@front/generales/shared/gql';
import { EditInput } from '../base/editInput';

export const UserForm: React.FC = () => {
  const { data, loading } = useProfileQuery();
  const [updateUser] = useUpdateUserMutation();

  const update = (field: string) => (value: string) => {
    let data: any;
    if (field === 'first_name') {
      data = {
        first_name: value,
      };
    }
    if (field === 'last_name') {
      data = {
        last_name: value,
      };
    }
    if (field === 'email') {
      data = {
        email: value,
      };
    }
    if (field === 'languague') {
      data = {
        languague: value as Languague,
      };
    }
    updateUser({
      variables: {
        updateUserInput: {
          ...data,
          id: parseInt(data!.getProfile.id),
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
          input="text"
          inputType="text"
          onSave={update('first_name')}
        />
        <EditInput
          label="Last Name"
          value={data?.getProfile.last_name ?? ''}
          input="text"
          inputType="text"
          onSave={update('last_name')}
        />
        <EditInput
          label="Email"
          value={data?.getProfile.email ?? ''}
          input="text"
          inputType="text"
          onSave={update('email')}
        />
        <EditInput
          label="Languague"
          value={data?.getProfile.languague ?? ''}
          input="select"
          selectValues={[
            { value: 'EN', label: 'English' },
            { value: 'ES', label: 'Spanish' },
          ]}
          onSave={update('languague')}
        />
      </div>
    </Skeleton>
  );
};
