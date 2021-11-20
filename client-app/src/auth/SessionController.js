import Session from './Session';

export default class SessionController {
  /**
   * @param {Session} session 
   * @param {(session: Session) => void} setSession Updates React State
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
      if (username === "admin@admin.com" && password === "password") return Session.newAdmin(username);
      else if (username === "user@user.com" && password === "password") return Session.newUser(username);
      else throw new Error('Invalid credentials');
    })();
    this._setSession(session);
    return session;
  }
  async logout() {
    this._setSession(Session.destroy());
  }
}
