import { gql } from '@apollo/client';

gql`
  query Gener04 {
    gener04 {
      id
      message
      read
      createdAt
      updatedAt
    }
  }
`;
