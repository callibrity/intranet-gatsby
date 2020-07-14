// Package dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { whiteContainer } from '@globals/styles';

// Component
export default function Section({
  label, color, children, className,
}) {
  return (
    <Container className={className}>
      <GroupHeader color={color}>
        <h1>{label}</h1>
      </GroupHeader>
      {children}
    </Container>
  );
}

Section.defaultProps = {
  className: '',
  color: '',
  label: '',
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
  ]).isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
};

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
