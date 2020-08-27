import React, { useContext } from 'react';
import styled from 'styled-components';
import TimeTracker from '@home/TimeTracker';
import { UserContext } from '@globals/contexts';
import { ImageQuery } from '@globals/types';
import Loading from '@home/Loading';

export default function Homepage() {
  const { userRole } = useContext(UserContext);
  return (
    <Container>
      Loading
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;
