// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { whiteContainer } from '@globals/styles';
import { reactChildren } from '@globals/types';

interface SectionPropTypes {
  label: string,
  color: string,
  className: string,
  children: reactChildren
}

// Component
export default function Section({label = '', color = '', className = '', children} : SectionPropTypes) {
  return (
    <Container className={className}>
      <GroupHeader color={color}>
        <h1>{label}</h1>
      </GroupHeader>
      {children}
    </Container>
  );
}

// Styling
const Container = styled.section`
  ${whiteContainer}
  display: inline-block;
  margin: 20px 0;
`;

const GroupHeader = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 500;
  border-bottom: 1px solid ${({ theme, color }) => theme[color]};
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;
