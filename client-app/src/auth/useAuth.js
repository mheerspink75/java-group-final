import React from 'react';
import AuthContext from './AuthContext';

/**
 * @typedef {import('./SessionController').default} SessionController
 */

/**
 * @returns {SessionController}
 */
export default function useAuth() {
  return React.useContext(AuthContext);
}
