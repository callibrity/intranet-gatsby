import React from 'react';
import { UserContext } from '@globals/contexts';
import Navbar from '@navbar/Navbar';
import GlobalStyle from './GlobalStyle';
import { reactChildren } from '@globals/types';
import { Location } from '@reach/router';
import Loading from '@components/reusable/Loading';
import useCredentials from '@hooks/useCredentials';
import useNavigationControl from '@hooks/useNavigationControl';

export const Provider = ({ children, pathname }: { children: reactChildren, pathname: string }) => {
  const { username, userEmail, userRole, signIn, signOut, loaded } = useCredentials();
  useNavigationControl(pathname, userRole);

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
