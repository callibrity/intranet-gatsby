import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NavBar from './NavBar';
import { UserContext } from '@globals/contexts';
import { mockContextValue } from '@globals/testConstants';

describe('NavBar component', () => {
  it('should only display the logo before a user is signed in', () => {
    const initialUsername = mockContextValue.username;
    mockContextValue.username = null;
    render(
      <UserContext.Provider value={mockContextValue}>
        <NavBar />
      </UserContext.Provider>
    );

    expect(screen.getByAltText('Callibrity Logo')).toBeInstanceOf(HTMLImageElement);
    expect(screen.queryByText('Quick Links')).toBeNull();
    expect(screen.queryByText(initialUsername)).toBeNull();
  });

  it('should display the quick links and user dropdown when a username is available', () => {
    mockContextValue.username = 'testUsername';
    render(
      <UserContext.Provider value={mockContextValue}>
        <NavBar />
      </UserContext.Provider>
    );

    expect(screen.getByText('Quick Links')).toBeInstanceOf(HTMLElement);
    expect(screen.getByText(mockContextValue.username)).toBeInstanceOf(HTMLElement);
  });

});
