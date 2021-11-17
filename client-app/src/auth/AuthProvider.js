import React from 'react';
import AuthContext from './AuthContext';
import Session from './Session';
import SessionController from './SessionController';

export default function AuthProvider({children}) {
  const [session, setSession] = React.useState(Session.read());
  const controller = new SessionController(session, setSession);
  return <AuthContext.Provider value={controller}>{children}</AuthContext.Provider>;
}
