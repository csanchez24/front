import { gql } from '@apollo/client';

gql`
  query Notification {
    notification {
      id
      title
      message
      read
      created_at
      updated_at
    }
  }
`;
