import { gql } from '@apollo/client';

gql`
  mutation updateNotification(
    $updateNotificationInput: UpdateNotificationInput!
  ) {
    updateNotification(updateNotificationInput: $updateNotificationInput) {
      id
      title
      message
      read
      created_at
      updated_at
    }
  }
`;
