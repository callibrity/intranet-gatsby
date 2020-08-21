import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { quickLinks } from '@globals/constants';
import NavDropdown from './NavDropdown';

const { Item } = Dropdown;

export default function QuickLinks() { 
  return (
    <NavDropdown label={"Quick Links"}>
      {quickLinks.map(({ title, url }) => (
        <Item key={title} href={url} target="_blank">
          {title}
        </Item>
      ))}
    </NavDropdown>
  );
}
