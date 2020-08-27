import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { UserContext } from '@globals/contexts';
import { Button } from 'react-bootstrap';
import { navigate } from 'gatsby';


export default function Login() {
  const { username, signIn } = useContext(UserContext);

  useEffect(() => {
    if (username) {
      navigate('/');
    }
  }, [username])

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
