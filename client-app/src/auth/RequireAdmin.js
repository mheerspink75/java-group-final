import {useLocation, Navigate, Outlet} from 'react-router-dom';
import useAuth from './useAuth';
import AuthEnabled from './AuthEnabled';

export default function RequireAdmin() {
  const location = useLocation();
  const auth = useAuth();
  if (!AuthEnabled) return <Outlet />;
  if (auth.session().isLoggedIn()) {
    if (auth.session().isAdmin()) {
      return <Outlet />;
    }
    return <Navigate to="/user" state={{from: location}} />;
  }
  return <Navigate to="/login" state={{from: location}} />;
}
