import { mockGoogleLoginOnSuccessResponse } from '@globals/testConstants';

module.exports = {
  ...jest.requireActual('react-google-login'),
  useGoogleLogin: jest.fn(({ onSuccess }: { onSuccess: Function }) => ({ signIn: () => onSuccess(mockGoogleLoginOnSuccessResponse) })),
  useGoogleLogout: jest.fn(({ onLogoutSuccess }: { onLogoutSuccess: Function }) => ({ signOut: onLogoutSuccess }))
};
