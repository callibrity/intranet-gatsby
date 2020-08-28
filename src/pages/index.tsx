import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { UserContext } from '@globals/contexts';
import { navigate } from 'gatsby';

export default function Homepage() {
  const { userRole } = useContext(UserContext);

  useEffect(() => {
    if (userRole === 'Account Manager') {
      navigate('/am-view');
    }
    else if (userRole === 'Developer') {
      navigate('/dev-view');
    }
  }, [userRole])

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
