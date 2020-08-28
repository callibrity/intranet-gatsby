import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const loading = () => (
  <SpinnerContainer>
    <Spinner animation="border" role="status" style={{ height: '150px', width: '150px' }} />
  </SpinnerContainer>
);

export default loading;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
`;