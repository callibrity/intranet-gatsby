import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { quickLinks } from '@globals/constants';
import NavDropdown from './NavDropdown';
import MdLink from 'react-icons/md';

export default function QuickLinks() {
  const { Item } = Dropdown;
  return (
    <NavDropdown label={"Quick Links"}>
      <MdLink></MdLink>
      {quickLinks.map(({ title, url }) => (
        <Item key={title} href={url}>
          {title}
        </Item>
      ))}
    </NavDropdown>
  );
}
