import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useNavigationControl from './useNavigationControl';
import { navigate } from 'gatsby';
import { developerRoute, accountManagerRoute, indexRoute, developerString, accountManagerString } from '@globals/constants';

const InitialArgumentsComponent = ({ pathName, userRole }: { pathName: string, userRole: string }) => {
  useNavigationControl(pathName, userRole);
  return (
    <div />
  )
}

const ChangingArgumentsComponent = () => {
  const [pathName, setPathName] = useState(accountManagerRoute);
  const userRole = accountManagerString;
  useNavigationControl(pathName, userRole);

  return (
    <>
      <div data-testid="goodPath" onClick={() => setPathName(`${accountManagerRoute}/newRoute`)} />
      <div data-testid="badPath" onClick={() => setPathName(`${developerRoute}/newRoute`)} />
    </>
  )
}

afterEach(() => {
  jest.clearAllMocks();
})

describe('useNavigationControl hook', () => {
  it('should not navigate if an account manager is on the account manager path', () => {
    render(<InitialArgumentsComponent pathName={accountManagerRoute} userRole={accountManagerString} />);

    expect(navigate).toHaveBeenCalledTimes(0);
  });

  it('should navigate to index route if an account manager is on the developer path', () => {
    render(<InitialArgumentsComponent pathName={developerRoute} userRole={accountManagerString} />);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(indexRoute);
  });

  it('should not navigate if a developer is on the developer path', () => {
    render(<InitialArgumentsComponent pathName={developerRoute} userRole={developerString} />);

    expect(navigate).toHaveBeenCalledTimes(0);
  });

  it('should navigate to index route if a developer is on the account manager path', () => {
    render(<InitialArgumentsComponent pathName={developerRoute} userRole={accountManagerString} />);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(indexRoute);
  });

  it('should not navigate if an accountManager goes to a new page on the account manager path', () => {
    render(<ChangingArgumentsComponent />);

    fireEvent.click(screen.getByTestId('goodPath'));

    expect(navigate).toHaveBeenCalledTimes(0);
  });

  it('should navigate to index route if an accountManager goes to a new page on the developer path', () => {
    render(<ChangingArgumentsComponent />);

    fireEvent.click(screen.getByTestId('badPath'));

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(indexRoute);
  });

});
