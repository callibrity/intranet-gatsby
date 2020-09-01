import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '@globals/contexts';
import { signOutButtonText } from '@globals/constants';

export default function Logout() {
  const { signOut } = useContext(UserContext);
  return (
    <Container onClick={signOut}>{signOutButtonText}</Container>
  );
}

const Container = styled.div`
  cursor: pointer;
`;
