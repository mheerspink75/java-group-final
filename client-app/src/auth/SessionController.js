import {AdminSession, NullSession, UserSession} from './Session';

/**
 * @typedef {import('./Session').BaseSession} Session
 */

export default class SessionController {
  /**
   * @param {Session} session 
   * @param {(session: Session) => void} setSession 
   */
  constructor(session, setSession) {
    this._session = session;
    this._setSession = setSession;
  }
  session() {
    return this._session;
  }
  /**
   * @param {string} username 
   * @param {string} password
   * @returns {Promise<Session>} the new session
   */
  async login(username, password) {
    const session = (() => {
      if (username === "admin@admin.com" && password === "password") return new AdminSession(username);
      else if (username === "user@user.com" && password === "password") return new UserSession(username);
      else throw new Error('Invalid credentials');
    })();
    this._setSession(session);
    return session;
  }
  async logout() {
    this._setSession(new NullSession());
  }
}
