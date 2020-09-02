import { mockGoogleLoginOnSuccessResponse } from '@globals/testConstants';

const mockedUseGoogleLogin = jest.fn();
const mockedUseGoogleLogout = jest.fn();

mockedUseGoogleLogin.mockImplementation(
  ({ clientId, onSuccess, onFailure, onAutoLoadFinished }: { clientId: string, onSuccess: Function, onFailure: Function, onAutoLoadFinished: Function }) => {
    return { signIn: () => onSuccess(mockGoogleLoginOnSuccessResponse) }
  })

mockedUseGoogleLogout.mockImplementation(
  ({ clientId, onLogoutSuccess }: { clientId: string, onLogoutSuccess: Function }) => {
    return { signOut: onLogoutSuccess }
  }
)


module.exports = {
  ...jest.requireActual('react-google-login'),
  useGoogleLogin: mockedUseGoogleLogin,
  useGoogleLogout: mockedUseGoogleLogout
};
