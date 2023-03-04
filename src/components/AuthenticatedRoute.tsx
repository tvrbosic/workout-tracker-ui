import { Navigate } from 'react-router-dom';

import { useAuthContext } from 'context/AuthContext';
import routes from 'router/routes';

interface IAuthenticatedRouteProps {
  children: JSX.Element;
}

function AuthenticatedRoute({ children }: IAuthenticatedRouteProps) {
  const { token } = useAuthContext();

  return !!token ? children : <Navigate to={routes.login.path} replace />;
}

export default AuthenticatedRoute;
