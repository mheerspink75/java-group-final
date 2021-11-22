import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useAuth from './useAuth';

export default function Logout() {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    auth.logout()
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  });

  return null;
}
