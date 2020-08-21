/* eslint-disable no-console */
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { useGoogleLogin, GoogleLoginResponse } from 'react-google-login';
import { UserContext } from '@globals/contexts';
import { googleClientId } from '@globals/constants';
import { flexCenter, standardButton } from '@globals/styles';
import { getEmployeeDetails } from '@api/serviceCalls';
import { setJwt } from '@api/api';

export default function Login() {
  const { setUsername, setUserEmail, setUserRole, userRole } = useContext(UserContext);
  const [signedIn, setSignedIn] = useState(false);
  const [employeeDetail, setEmployeeDetails] = useState(null);
  const { signIn } = useGoogleLogin({
    clientId: googleClientId,
    onSuccess: ({tokenId, profileObj: {name, email}} : GoogleLoginResponse) => { 
      setJwt(tokenId);
      setUsername(name);
      setUserEmail(email);
      getEmployeeDetails(setUserRole, console.log);
      navigate('/');
    },
    onFailure: () => console.log("sign in failed"),
    isSignedIn: true
  });

  return (
    <Container>
      <Welcome>Welcome to Callibrity!</Welcome>
      <SignIn onClick={signIn}>Sign In</SignIn>
    </Container>
  );
}

const Container = styled.div`
  ${flexCenter}
  padding: 20px;
  text-align: center;
  flex-direction: column;
`;

const Welcome = styled.h2`
  margin-bottom: 30px;
`;

const SignIn = styled.button`
  ${standardButton}
`;
