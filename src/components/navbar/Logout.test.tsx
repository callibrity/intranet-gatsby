import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Logout from './Logout';
import { signOutButtonText } from '@globals/constants';
import { UserContext } from '@globals/contexts';
import { mockContextValue } from '@globals/testConstants';


describe('Logout component', () => {
  it('should display the logout button', () => {
    render(
      <UserContext.Provider value={mockContextValue}>
        <Logout />
      </UserContext.Provider>
    );

    expect(screen.getByText(signOutButtonText)).toBeInstanceOf(HTMLElement);
  });

  it('should run the sign out function on click', () => {
    render(
      <UserContext.Provider value={mockContextValue}>
        <Logout />
      </UserContext.Provider>
    );

    const logOutButton = screen.getByText(signOutButtonText);
    fireEvent.click(logOutButton);

    expect(mockContextValue.signOut).toHaveBeenCalledTimes(1);
  });
});
