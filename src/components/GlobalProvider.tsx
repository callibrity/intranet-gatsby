import React, { useEffect } from 'react';
import { UserContext } from '@globals/contexts';
import Navbar from '@navbar/Navbar';
import GlobalStyle from './GlobalStyle';
import { reactChildren } from '@globals/types';
import { Location } from '@reach/router';
import { developerRoute, accountManagerRoute, indexRoute, developerString, accountManagerString } from '@globals/constants';
import { navigate } from 'gatsby';
import Loading from '@components/reusable/Loading';
import { accountManagerFlag, developerFlag } from '@globals/flags';
import useCredentials from '@hooks/useCredentials';

export const Provider = ({ children, pathname }: { children: reactChildren, pathname: string }) => {
  const { username, userEmail, userRole, signIn, signOut, loaded } = useCredentials();

  useEffect(() => {
    if (userRole) {
      if (pathname.includes(accountManagerRoute) && userRole !== accountManagerString && !accountManagerFlag) {
        navigate(indexRoute);
      }
      else if (pathname.includes(developerRoute) && userRole !== developerString && !developerFlag) {
        navigate(indexRoute)
      }
    }
  }, [pathname, userRole])

  return (
    <UserContext.Provider value={{ username, userEmail, userRole, signIn, signOut }}>
      <GlobalStyle />
      <Navbar />
      {loaded ? children : <Loading />}
    </UserContext.Provider>
  );
};

const GlobalProvider = ({ element }: { element: reactChildren }) => {
  return (
    <Location>
      {({ location }) => (
        <Provider pathname={location.pathname}>
          {element}
        </Provider>
      )}
    </Location>

  );
}

export default GlobalProvider;
