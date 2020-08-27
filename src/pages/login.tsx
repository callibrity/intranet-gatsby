import React, { useContext } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { useGoogleLogin, GoogleLoginResponse } from 'react-google-login';
import { UserContext } from '@globals/contexts';
import { googleClientId } from '@globals/constants';
import { Button } from 'react-bootstrap';
import { getEmployeeDetails } from '@api/serviceCalls';
import { setJwt } from '@api/api';

export default function Login() {
  const { setUsername, setUserEmail, setUserRole } = useContext(UserContext);
  const { signIn } = useGoogleLogin({
    clientId: googleClientId,
    onSuccess: ({ tokenId, profileObj: { name, email } }: GoogleLoginResponse) => {
      setJwt(tokenId);
      setUsername(name);
      setUserEmail(email);
      getEmployeeDetails(setUserRole, console.log);
      navigate('/test');
    },
    onFailure: () => console.log("sign in failed"),
    isSignedIn: true
  });

  return (
    <Container>
      <Welcome>Welcome to Callibrity!</Welcome>
      <Button size="lg" onClick={signIn}>Sign In</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  flex-direction: column;
`;

const Welcome = styled.h2`
  margin-bottom: 30px;
`;
