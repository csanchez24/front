import { gql } from '@apollo/client';

gql`
  mutation updateGener02($updateGener02Input: UpdateGener02Input!) {
    updateGener02(updateGener02Input: $updateGener02Input) {
      id
      firstName
      lastName
      email
    }
  }
`;
