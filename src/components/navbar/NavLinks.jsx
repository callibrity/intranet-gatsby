import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { UserContext } from '@globals/contexts';
import { linkStyle } from '@globals/styles';
import QuickLinks from './QuickLinks';
import UserDropdown from './UserDropdown';

export default function NavLinks() {
  const { username } = useContext(UserContext);
  return !username ? null : (
    <Container username={username}>
      <StyledLink to="/wiki">Wiki</StyledLink>
      <StyledLink to="/people">People</StyledLink>
      <QuickLinks />
      <UserDropdown />
    </Container>
  );
}

const Container = styled.div`
  display: flex;  
  font-size: 17.6px;
  font-weight: 600;
  color: white;
`;

const StyledLink = styled(Link)`
    ${linkStyle}
`;
