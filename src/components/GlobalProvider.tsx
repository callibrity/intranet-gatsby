import React, { useState, useEffect } from 'react';
import { UserContext } from '@globals/contexts';
import Navbar from '@navbar/Navbar';
import GlobalStyle from './GlobalStyle';
import { reactChildren } from '@globals/types';
import { globalHistory } from '@reach/router';
import { googleClientId } from '@globals/constants';
import { getEmployeeDetails } from '@api/serviceCalls';
import { setJwt } from '@api/api';
import { navigate } from 'gatsby';
import { useGoogleLogin, GoogleLoginResponse } from 'react-google-login';
import Loading from '@home/Loading';

export const Provider = ({ children }: { children: reactChildren }) => {
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
    return globalHistory.listen((result) => {
      //console.log('location:', result.location.pathname);
    })
  })

  return (
    <UserContext.Provider value={contextObject}>
      <GlobalStyle />
      <Navbar />
      {signInLoaded ? children : <Loading />}
    </UserContext.Provider>
  );
};

export default function GlobalProvider({ element }: { element: reactChildren }) {
  return (
    <Provider>
      {element}
    </Provider>
  );
}
