import {useLocation, Navigate, Outlet} from 'react-router-dom';
import useAuth from './useAuth';

export default function RequireUser() {
  const location = useLocation();
  const auth = useAuth();
  if (auth.session().isLoggedIn()) {
    if (auth.session().isAdmin()) {
      return <Navigate to="/admin" state={{from: location}} />;
    }
    return <Outlet />;
  }
  return <Navigate to="/login" state={{from: location}} />;
}
