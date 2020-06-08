import React from "react";
import { Dropdown } from "react-bootstrap";
import { quickLinks } from "../../globals/constants";
import NavDropdown from "./NavDropdown";

export default function QuickLinks() {
  const {Item} = Dropdown;
  return (
    <NavDropdown label="Quick Links">
      {quickLinks.map(({ title, url }) => (
        <Item key={title} href={url}>
          {title}
        </Item>
      ))}
    </NavDropdown>
  );
}