import {useLocation, Navigate} from 'react-router-dom';
import useAuth from './useAuth';
import AuthEnabled from './AuthEnabled';

export default function NoMatch() {
  const location = useLocation();
  const auth = useAuth();
  if (!AuthEnabled) return <h3>Page not found</h3>;
  if (auth.session().isLoggedIn()) {
    if (auth.session().isAdmin()) {
      return <Navigate to="/admin" state={{from: location}} />;
    }
    return <Navigate to="/user" state={{from: location}} />;
  }
  return <Navigate to="/login" state={{from: location}} />;
}
