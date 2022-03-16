import { gql } from '@apollo/client';

gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      first_name
      last_name
      email
      languague
    }
  }
`;
