import React, { useContext } from "react"
import {Dropdown} from "react-bootstrap"

import { UserContext } from "@contexts"
import Logout from "./Logout"
import NavDropdown from "./NavDropdown"

export default function UserDropdown() {
  const { username } = useContext(UserContext)
  const {Item} = Dropdown
  return (
    <NavDropdown label={username}>
      <Item>
        <Logout />
      </Item>
    </NavDropdown>
  )
} 
