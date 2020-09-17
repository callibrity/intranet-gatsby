import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import NavLink from 'react-bootstrap/NavLink';
import { reactChildren } from '@globals/types';

const { Toggle, Menu, Item } = Dropdown;

interface PropTypes {
  label: string,
  items: reactChildren[],
}

export default function UserDropdown({ label, items }: PropTypes) {
  const itemElements = items.map((item, i) => <Item key={i}>{item}</Item>)
  return (
    <Dropdown style={{ marginLeft: '20px' }}>
      <Toggle as={NavLink}>{label}</Toggle>
      <Menu>
        {itemElements}
      </Menu>
    </Dropdown>
  );
}


