const reactGoogleLogin = jest.requireActual("react-google-login")

module.exports = {
  ...reactGoogleLogin,
  useGoogleLogin: ({onSuccess}) => {
    return {signIn: () => onSuccess({profileObj: {name: "testName", email: "test"}})}
  },
  useGoogleLogout: ({onLogoutSuccess}) => {
    return {signOut: () => onLogoutSuccess()}
  },
}