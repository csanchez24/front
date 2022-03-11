import { gql } from '@apollo/client';

gql`
  query Profile {
    getProfile {
      id
      first_name
      last_name
      email
      is_active
      roles {
        id
        role
        description
      }
    }
  }
`;
