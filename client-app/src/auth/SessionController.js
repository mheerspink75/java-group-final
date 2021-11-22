import Session from './Session';
import url from '../services/url';

export default class SessionController {
  /**
   * @param {Session} session 
   * @param {(session: Session) => void} setSession Updates React State
   */
  constructor(session, setSession) {
    this._session = session;
    this._setSession = setSession;
  }

  /**
   * @returns {Session}
   */
  session() {
    return this._session;
  }

  /**
   * @param {string} username 
   * @param {string} password
   * @returns {Promise<Session>} the new session
   */
  async login(username, password) {
    const response = await fetch(`${url}/auth/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password}),
    });
    switch (response.status) {
      case 401: { // invalid credentials
        const data = await response.json();
        throw new Error(data.message);
      }
      case 200: { // success
        const data = await response.json();
        const session = Session.fromData(data);
        this._setSession(session);
        return session;
      }
      default: { // unhandled
        console.log(`Unexpected response status: ${response.status}`);
        console.log(response);
        throw new Error('Internal Server Error');
      }
    }
  }

  /**
   * @returns {Promise<void>}
   */
  async logout() {
    this._setSession(Session.destroy());
  }
}
