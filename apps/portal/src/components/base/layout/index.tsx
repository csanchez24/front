import { Outlet } from 'react-router-dom';
import { BellIcon, UserCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { ActionIcon, Drawer } from '@mantine/core';

export const Layout: React.FC = () => {
  const [opened, setOpened] = useState(false);

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
                  <ActionIcon variant="transparent">
                    <BellIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </ActionIcon>
                  <ActionIcon
                    variant="transparent"
                    onClick={() => setOpened(true)}
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
        opened={opened}
        position="right"
        onClose={() => setOpened(false)}
        title="User"
        padding="md"
      ></Drawer>
    </main>
  );
};
