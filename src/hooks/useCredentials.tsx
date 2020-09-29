import { useState } from 'react';
import { googleClientId, loginRoute } from '@globals/constants';
import { getEmployeeDetails } from '@api/serviceCalls';
import { setJwt, removeJwt } from '@api/api';
import { useGoogleLogin, useGoogleLogout, GoogleLoginResponse } from 'react-google-login';
import { navigate } from 'gatsby';

const useCredentials = () => {
  const [username, setUsername] = useState<string>(null);
  const [userEmail, setUserEmail] = useState<string>(null);
  const [userRole, setUserRole] = useState<string>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  const { signIn } = useGoogleLogin({
    clientId: googleClientId,
    onSuccess: ({ tokenId, profileObj: { name, email } }: GoogleLoginResponse) => {
      setJwt(tokenId);
      setUsername(name);
      setUserEmail(email);
      getEmployeeDetails(({ role }: { role: string }) => setUserRole(role));
    },
    onFailure: () => console.log('sign in failed'),
    onAutoLoadFinished: (signedIn) => {
      setLoaded(true);
      if (!signedIn) {
        navigate(loginRoute);
      }
    },
    isSignedIn: true,
  });

  const { signOut } = useGoogleLogout({
    clientId: googleClientId,
    onLogoutSuccess: () => {
      removeJwt();
      setUsername(null);
      setUserEmail(null);
      setUserRole(null);
      navigate(loginRoute);
    },
  });

  return {
    username, userEmail, userRole, signIn, signOut, loaded,
  };
};

export default useCredentials;
