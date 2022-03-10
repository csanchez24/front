import { Navigate, useLocation } from 'react-router-dom';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const location = useLocation();

  if (!localStorage.getItem('auth')) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
