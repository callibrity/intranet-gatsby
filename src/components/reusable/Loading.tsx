import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

const Loading = () => (
  <SpinnerContainer>
    <Spinner animation="border" role="status" style={{ height: '150px', width: '150px' }} />
  </SpinnerContainer>
);

export default Loading;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
`;