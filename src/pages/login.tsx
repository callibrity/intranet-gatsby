import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { UserContext } from '@globals/contexts';
import Button from 'react-bootstrap/Button';
import { navigate } from 'gatsby';
import { indexRoute, loginWelcomeMessage } from '@globals/constants';


const Login = () => {
  const { username, signIn } = useContext(UserContext);

  useEffect(() => {
    if (username) {
      navigate(indexRoute);
    }
  }, [username])

  return (
    <Container>
      <Welcome>{loginWelcomeMessage}</Welcome>
      <Button size="lg" onClick={signIn}>Sign In</Button>
    </Container>
  );
}

export default Login;

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
