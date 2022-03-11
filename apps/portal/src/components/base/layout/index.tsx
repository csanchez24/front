import { Outlet } from 'react-router-dom';
import { BellIcon, UserCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { ActionIcon, Drawer } from '@mantine/core';
import { NotificationsList } from '../../notificationsList';
import { UserForm } from '../../userForm';
import { useNotificationQuery } from '@front/generales/shared/gql';

export const Layout: React.FC = () => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const { data, loading } = useNotificationQuery();

  return (
    <main className="">
      <div className="min-h-full ">
        <div className="bg-indigo-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-16 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="">
                <div className="ml-4 flex gap-4 items-center md:ml-6">
                  <ActionIcon
                    variant="transparent"
                    onClick={() => setNotificationOpen(true)}
                  >
                    <BellIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </ActionIcon>
                  <ActionIcon
                    variant="transparent"
                    onClick={() => setIsUserOpen(true)}
                  >
                    <UserCircleIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </ActionIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
      <Drawer
        opened={isUserOpen}
        position="right"
        onClose={() => setIsUserOpen(false)}
        title="User"
        size="xl"
        padding="md"
      >
        <UserForm />
      </Drawer>
      <Drawer
        opened={isNotificationOpen}
        position="right"
        onClose={() => setNotificationOpen(false)}
        title="Notification"
        size="xl"
        padding="md"
        className="h-full overflow-auto "
      >
        <NotificationsList
          loading={loading}
          notifications={data?.notification}
        />
      </Drawer>
    </main>
  );
};
