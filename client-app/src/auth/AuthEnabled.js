const AuthEnabled = process.env.NODE_ENV === 'product' || !process.env.REACT_APP_NO_AUTH;

export default AuthEnabled;
