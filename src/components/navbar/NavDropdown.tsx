import React from 'react';
import { Dropdown, NavItem, NavLink } from 'react-bootstrap';


const { Toggle, Menu } = Dropdown;

interface NavDropdownPropTypes {
  label: string,
  children: React.ReactNode[] | React.ReactElement,
}

export default function UserDropdown({ label, children }: NavDropdownPropTypes) {
  return (
    <Dropdown as={NavItem} style={{marginLeft: '20px'}}>
      <Toggle as={NavLink}>{label}</Toggle>
      <Dropdown.Menu>
        {children}
      </Dropdown.Menu>
    </Dropdown>
  );
}


