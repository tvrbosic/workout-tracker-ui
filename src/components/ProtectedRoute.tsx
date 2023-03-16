import { Navigate, Outlet } from 'react-router-dom';

import routes from 'router/routes';

interface IProtectedRouteProps {
  token: string;
}

function ProtectedRoute({ token }: IProtectedRouteProps) {
  if (!token) {
    return <Navigate to={routes.login.path} replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
