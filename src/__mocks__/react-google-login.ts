const { mockLoginResponse } = require('@globals/testConstants');

const reactGoogleLogin = jest.requireActual('react-google-login');

module.exports = {
  ...reactGoogleLogin,
  useGoogleLogin: jest.fn(),
  useGoogleLogout: ({ onLogoutSuccess }) => ({ signOut: () => onLogoutSuccess() }),
};
