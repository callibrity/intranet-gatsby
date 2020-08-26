import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { UserContext } from '@globals/contexts';
import Logout from './Logout';
import NavDropdown from './NavDropdown';

const { Item } = Dropdown;

export default function UserDropdown() {
  const { username } = useContext(UserContext);
  return (
    <NavDropdown label={username}>
      <Item>
        <Logout />
      </Item>
    </NavDropdown>
  );
}
