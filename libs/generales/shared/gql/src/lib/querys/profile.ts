import { gql } from '@apollo/client';

gql`
  query Profile {
    getProfile {
      id
      firstName
      lastName
      email
      isActive
      roles {
        id
        role
        description
      }
    }
  }
`;
