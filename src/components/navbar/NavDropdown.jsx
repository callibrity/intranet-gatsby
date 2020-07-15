import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { linkStyle } from '@globals/styles';

const NavDropdown = ({ label, children }) => {
  const { Toggle, Menu } = Dropdown;
  return (
    <StyledDropdown>
      <Toggle as="a">{label}</Toggle>
      <Menu>
        {children}
      </Menu>
    </StyledDropdown>
  );
}

export default NavDropdown;

NavDropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
  ]).isRequired,
  label: PropTypes.string.isRequired,
};

export const StyledDropdown = styled(Dropdown)`
  ${linkStyle}
`;
