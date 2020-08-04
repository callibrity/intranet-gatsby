const { mockLoginResponse } = require('@globals/testConstants');

const reactGoogleLogin = jest.requireActual('react-google-login');

module.exports = {
  ...reactGoogleLogin,
  useGoogleLogin: ({ onSuccess }) => ({ signIn: () => onSuccess(mockLoginResponse) }),
  useGoogleLogout: ({ onLogoutSuccess }) => ({ signOut: () => onLogoutSuccess() }),
};
