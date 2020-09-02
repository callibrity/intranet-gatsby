import React from 'react';
import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import useCredentials from './useCredentials';
import { mockGoogleLoginOnSuccessResponse } from '@globals/testConstants';
import { navigate } from 'gatsby';
import { loginRoute } from '@globals/constants';

const TestComponent = () => {
  const { username, userEmail, userRole, signIn, signOut, loaded } = useCredentials();
  return (
    <>
      <div data-testid="username">{username}</div>
      <div data-testid="userEmail">{userEmail}</div>
      <div data-testid="userRole">{userRole}</div>
      <div data-testid="loaded">{loaded.toString()}</div>
      <div data-testid="signIn" onClick={signIn} />
      <div data-testid="signOut" onClick={signOut} />
    </>
  )
}

afterEach(() => {
  jest.clearAllMocks();
})

describe('useCredentials hook', () => {
  it('should start with empty user details, then fill them on sign in, and remove them on sign out', () => {
    render(<TestComponent />);

    expect(screen.getByTestId('username').innerHTML).toBe('');
    expect(screen.getByTestId('userEmail').innerHTML).toBe('');
    expect(screen.getByTestId('userRole').innerHTML).toBe('');
    expect(screen.getByTestId('loaded').innerHTML).toBe('false');
    expect(axios.defaults.headers.common.Authorization).toBeUndefined();
  });

  it('should provide expected sure details on sign in, then clear them and navigate to login on signout', () => {
    const { tokenId, profileObj: { name, email } } = mockGoogleLoginOnSuccessResponse;
    render(<TestComponent />);

    expect(screen.getByTestId('username').innerHTML).toBe('');
    expect(screen.getByTestId('userEmail').innerHTML).toBe('');
    expect(screen.getByTestId('userRole').innerHTML).toBe('');
    expect(screen.getByTestId('loaded').innerHTML).toBe('false');
    expect(axios.defaults.headers.common.Authorization).toBeUndefined();

    fireEvent.click(screen.getByTestId('signIn'));

    expect(screen.getByTestId('username').innerHTML).toBe(name);
    expect(screen.getByTestId('userEmail').innerHTML).toBe(email);
    expect(axios.defaults.headers.common.Authorization).toBe(`Bearer ${tokenId}`);

    fireEvent.click(screen.getByTestId('signOut'));

    expect(screen.getByTestId('username').innerHTML).toBe('');
    expect(screen.getByTestId('userEmail').innerHTML).toBe('');
    expect(axios.defaults.headers.common.Authorization).toBe('');
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(loginRoute)
  });
});
