/**
 * @typedef {{
 *  username: string;
 *  is_admin: boolean;
 *  is_logged_in: boolean;
 * }} SessionData
 */

const storage = sessionStorage;
const storageKey = 'session';

export default class Session {
  /**
   * @param {SessionData} data 
   */
  constructor(data) {
    this.data = data;
  }
  username() {
    return this.data.username;
  }
  isAdmin() {
    return this.data.is_admin;
  }
  isLoggedIn() {
    return this.data.is_logged_in;
  }
  /**
   * @param {string} username
   */
  static newAdmin(username) {
    return new Session({username, is_logged_in: true, is_admin: true}).write();
  }
  /**
   * @param {string} username 
   */
  static newUser(username) {
    return new Session({username, is_logged_in: true, is_admin: false}).write();
  }
  static newNull() {
    return NullSession.write();
  }
  write() {
    storage.setItem(storageKey, JSON.stringify(this.data));
    return this;
  }
  static read() {
    const data = storage.getItem(storageKey);
    if (data) return new Session(JSON.parse(data));
    else return Session.newNull();
  }
  static destroy() {
    storage.removeItem(storageKey);
    return NullSession;
  }
}

const NullSession = new Session({username: '', is_logged_in: false, is_admin: false});
