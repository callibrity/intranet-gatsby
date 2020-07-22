import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { UserContext } from '@globals/contexts';
import { linkStyle } from '@globals/styles';
import { quickLinks } from '@globals/constants';
import Logout from './Logout';

const { Toggle, Menu, Item } = Dropdown;

export const UserDropdown = ({ username }) => (
  <StyledDropdown>
    <Toggle as="a">{username}</Toggle>
    <Menu>
      <Item>
        <Logout />
      </Item>
    </Menu>
  </StyledDropdown>
);

export const QuickLinks = () => (
  <StyledDropdown>
    <Toggle as="a">Quick Links</Toggle>
    <Menu>
      {quickLinks.map(({ title, url }) => (
        <Item key={title} href={url}>
          {title}
        </Item>
      ))}
    </Menu>
  </StyledDropdown>
);

const NavLinks = () => {
  const { username } = useContext(UserContext);
  return !username ? null : (
    <Container username={username}>
      <StyledLink to="/wiki">Wiki</StyledLink>
      <StyledLink to="/people">People</StyledLink>
      <QuickLinks />
      <UserDropdown username={username} />
    </Container>
  );
};

UserDropdown.propTypes = {
  username: PropTypes.string.isRequired,
};

export default NavLinks;

const Container = styled.div`
  display: flex;  
  font-size: 17.6px;
  font-weight: 600;
  color: white;
`;

export const StyledLink = styled(Link)`
    ${linkStyle}
`;

const StyledDropdown = styled(Dropdown)`
  ${linkStyle}
`;
