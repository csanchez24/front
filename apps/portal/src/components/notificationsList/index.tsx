import { Badge, Skeleton } from '@mantine/core';
import {
  Notification,
  useUpdateNotificationMutation,
} from '@front/generales/shared/gql';

interface NotificationsListProps {
  loading: boolean;
  notifications: Notification[] | undefined;
}

export const NotificationsList: React.FC<NotificationsListProps> = ({
  loading,
  notifications,
}) => {
  const [updateNotification] = useUpdateNotificationMutation();

  return (
    <Skeleton visible={loading}>
      <ul className="divide-y divide-gray-200">
        {notifications?.map((notification) => (
          <li key={notification.id} className="py-5">
            <div className="relative">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  {notification.message}
                </h3>
                {!notification.read ? (
                  <Badge
                    color="green"
                    size="lg"
                    radius="xl"
                    className="cursor-pointer"
                    onClick={() =>
                      updateNotification({
                        variables: {
                          updateNotificationInput: { id: notification.id },
                        },
                      })
                    }
                  >
                    Mark as view
                  </Badge>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-gray-600 ">
                {notification.created_at}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Skeleton>
  );
};
