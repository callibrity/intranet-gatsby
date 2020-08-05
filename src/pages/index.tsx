import React from 'react';
import styled from 'styled-components';
import Section from '@home/Section';
import TimeTracker from '@home/TimeTracker';

export default function Homepage() {
  return (
    <Container>
      <TimeTracker />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;
