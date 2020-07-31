import React from 'react';
import { Dropdown } from 'react-bootstrap';

const { Toggle, Menu } = Dropdown;

interface NavDropdownPropTypes {
  label: string,
  children: React.ReactNode[] | React.ReactElement,
}

export default function UserDropdown({ label, children }: NavDropdownPropTypes) {
  return (
    <Dropdown>
      <Toggle as="a">{label}</Toggle>
      <Menu>
        {children}
      </Menu>
    </Dropdown>
  );
}


