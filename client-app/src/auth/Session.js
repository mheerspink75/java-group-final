/**
 * @typedef {{
 *  username: string;
 *  firstName: string;
 *  lastName: string;
 *  email: string;
 *  phoneNumber: string;
 *  isAdmin: boolean;
 *  status: string;
 * }} SessionData
 */

const storage = sessionStorage;
const storageKey = 'session';

export default class Session {
  /**
   * @param {SessionData | null} data 
   */
  constructor(data = null) {
    this.data = data;
  }
  username() {
    return this.data?.username;
  }
  isAdmin() {
    return this.data?.isAdmin;
  }
  isLoggedIn() {
    return !!this.data;
  }
  /**
   * @param {SessionData} data 
   * @returns {Session}
   */
  static fromData(data) {
    return new Session(data).write();
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

const NullSession = new Session();
