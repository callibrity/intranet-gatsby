import React from 'react';
import { Dropdown } from 'react-bootstrap';

const { Toggle, Menu } = Dropdown;

interface propInterface {
  label: string,
  children: React.ReactNode[] | React.ReactElement,
}

export default function UserDropdown({ label, children }: propInterface) {
  return (
    <Dropdown>
      <Toggle as="a">{label}</Toggle>
      <Menu>
        {children}
      </Menu>
    </Dropdown>
  );
}


