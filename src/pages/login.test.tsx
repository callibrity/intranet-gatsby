import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './login';
import { navigate } from 'gatsby';
import { UserContext } from '@globals/contexts';
import { mockContextValue } from '@globals/testConstants';
import { indexRoute, loginWelcomeMessage } from '@globals/constants';

jest.mock('gatsby');

afterEach(() => {
  jest.clearAllMocks();
})

describe('Login component', () => {
  it('should navigate to index if the user is signed in', () => {
    mockContextValue.username = 'test';
    render(
      <UserContext.Provider value={mockContextValue}>
        <Login />
      </UserContext.Provider>
    );

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(indexRoute);
  });

  it('should display the welcome message if the user is not signed in', () => {
    mockContextValue.username = null;
    render(
      <UserContext.Provider value={mockContextValue}>
        <Login />
      </UserContext.Provider>
    );

    const welcome = screen.getByText(loginWelcomeMessage);

    expect(welcome).toBeInstanceOf(HTMLElement);
  });

  it('should call the signIn function when the button is clicked', () => {
    const { signIn } = mockContextValue;
    mockContextValue.username = null;
    render(
      <UserContext.Provider value={mockContextValue}>
        <Login />
      </UserContext.Provider>
    );

    const loginButton = screen.getByRole('button');

    fireEvent.click(loginButton);

    expect(signIn).toHaveBeenCalledTimes(1);
  });
});
