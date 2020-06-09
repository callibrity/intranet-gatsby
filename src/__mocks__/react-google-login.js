const { mockLoginResponse } = require("@testConstants")
const reactGoogleLogin = jest.requireActual("react-google-login")

module.exports = {
  ...reactGoogleLogin,
  useGoogleLogin: ({onSuccess}) => {
    return {signIn: () => onSuccess(mockLoginResponse)}
  },
  useGoogleLogout: ({onLogoutSuccess}) => {
    return {signOut: () => onLogoutSuccess()}
  },
}