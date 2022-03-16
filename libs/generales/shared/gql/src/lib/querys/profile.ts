import { gql } from '@apollo/client';

gql`
  query Profile {
    getProfile {
      id
      first_name
      last_name
      email
      languague
      is_active
      roles {
        id
        role
        description
      }
    }
  }
`;
