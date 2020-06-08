import React, { useContext } from "react";
import { UserContext } from "../../globals/UserContext";
import Logout from "./Logout";
import NavDropdown from "./NavDropdown";
import {Dropdown} from "react-bootstrap";

export default function UserDropdown() {
  const { username } = useContext(UserContext);
  const {Item} = Dropdown;
  return (
    <NavDropdown label={username}>
      <Item>
        <Logout />
      </Item>
    </NavDropdown>
  );
}
