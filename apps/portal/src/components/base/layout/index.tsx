import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <main className="bg-red-800">
      <Outlet />
    </main>
  );
};
