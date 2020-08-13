import React, { useContext } from 'react';
import styled from 'styled-components';
import TimeTracker from '@home/TimeTracker';
import { UserContext } from '@globals/contexts';

export default function Homepage() {
  const { userRole } = useContext(UserContext);

  return (
    <Container>
      {userRole 
        ?  <TimeTracker /> : <h1>...loading</h1>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;
