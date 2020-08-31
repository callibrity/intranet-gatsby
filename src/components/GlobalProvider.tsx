import React, { useState, useEffect } from 'react';
import { UserContext } from '@globals/contexts';
import Navbar from '@navbar/Navbar';
import GlobalStyle from './GlobalStyle';
import { reactChildren } from '@globals/types';
import { Location } from '@reach/router';
import { googleClientId } from '@globals/constants';
import { getEmployeeDetails } from '@api/serviceCalls';
import { setJwt } from '@api/api';
import { navigate } from 'gatsby';
import { useGoogleLogin, GoogleLoginResponse } from 'react-google-login';
import Loading from '@components/reusable/Loading';

export const Provider = ({ children, pathname }: { children: reactChildren, pathname: string }) => {
  const [username, setUsername] = useState<string>(null);
  const [userEmail, setUserEmail] = useState<string>(null);
  const [userRole, setUserRole] = useState<string>(null);
  const [signInLoaded, setSignInLoaded] = useState<boolean>(false);
  const { signIn } = useGoogleLogin({
    clientId: googleClientId,
    onSuccess: ({ tokenId, profileObj: { name, email } }: GoogleLoginResponse) => {
      setJwt(tokenId);
      setUsername(name);
      setUserEmail(email);
      getEmployeeDetails(setUserRole, console.log);
    },
    onFailure: () => console.log("sign in failed"),
    onAutoLoadFinished: (signedIn) => {
      setSignInLoaded(true);
      if (!signedIn) {
        navigate('/login');
      }
    },
    isSignedIn: true
  });

  const contextObject = { username, setUsername, userEmail, setUserEmail, userRole, setUserRole, signIn };

  useEffect(() => {
    if (userRole) {
      if (pathname.includes('account-manager-view') && userRole !== 'Account Manager') {
        navigate('/');
      }
      else if (pathname.includes('developer-view') && userRole !== 'Developer') {
        navigate('/')
      }
    }
  }, [pathname, userRole])


  return (
    <UserContext.Provider value={contextObject}>
      <GlobalStyle />
      <Navbar />
      {signInLoaded ? children : <Loading />}
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
