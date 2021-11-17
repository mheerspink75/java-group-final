import {useLocation, Navigate} from 'react-router-dom';
import useAuth from './useAuth';

export default function NoMatch() {
  const location = useLocation();
  const auth = useAuth();
  if (auth.session().isLoggedIn()) {
    if (auth.session().isAdmin()) {
      return <Navigate to="/admin" state={{from: location}} />;
    }
    return <Navigate to="/user" state={{from: location}} />;
  }
  return <Navigate to="/login" state={{from: location}} />;
}
