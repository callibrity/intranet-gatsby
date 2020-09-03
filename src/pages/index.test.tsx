import React from 'react';
import { render } from '@testing-library/react';
import Index from './index';
import { navigate } from 'gatsby';
import { UserContext } from '@globals/contexts';
import { mockContextValue } from '@globals/testConstants';
import { developerRoute, accountManagerRoute, developerString, accountManagerString } from '@globals/constants';

jest.mock('gatsby');

afterEach(() => {
  jest.clearAllMocks();
})

describe('Index component', () => {
  it('should navigate to account manager view when user role is Account Manager', () => {
    mockContextValue.userRole = accountManagerString;
    render(
      <UserContext.Provider value={mockContextValue}>
        <Index />
      </UserContext.Provider>
    );

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(accountManagerRoute);
  });

  it('should navigate to developer view when user role is Developer', () => {
    mockContextValue.userRole = developerString;
    render(
      <UserContext.Provider value={mockContextValue}>
        <Index />
      </UserContext.Provider>
    );

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(developerRoute);
  });

});
