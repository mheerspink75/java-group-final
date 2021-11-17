export class BaseSession {
  /**
   * @param {string} username 
   */
  constructor(username) {
    this._username = username;
  }
  username() {
    return this._username;
  }
  isAdmin() {
    return false;
  }
  isLoggedIn() {
    return false;
  }
}

export class AdminSession extends BaseSession {
  isAdmin() {
    return true;
  }
  isLoggedIn() {
    return true;
  }
}

export class UserSession extends BaseSession {
  isAdmin() {
    return false;
  }
  isLoggedIn() {
    return true;
  }
}

export class NullSession extends BaseSession {
  isAdmin() {
    return false;
  }
  isLoggedIn() {
    return false;
  }
}
