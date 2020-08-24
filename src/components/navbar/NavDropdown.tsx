import React from 'react';
import { Dropdown, NavLink } from 'react-bootstrap';
import { reactChildren } from '@globals/types';

const { Toggle, Menu } = Dropdown;

interface PropTypes {
  label: string,
  children: reactChildren,
}

export default function UserDropdown({ label, children }: PropTypes) {
  return (
    <Dropdown style={{marginLeft: '20px'}}>
      <Toggle as={NavLink}>{label}</Toggle>
      <Menu>
        {children}
      </Menu>
    </Dropdown>
  );
}


