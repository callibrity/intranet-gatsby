import React from "react"
import {Dropdown} from "react-bootstrap"
import styled from "styled-components"

import { linkStyle } from "@styles"

export default function UserDropdown({label, children}) {
  const {Toggle, Menu} = Dropdown
  return (
    <StyledDropdown>
      <Toggle as="a">{label}</Toggle>
      <Menu>
        {children}
      </Menu>
    </StyledDropdown>
  )
}

const StyledDropdown = styled(Dropdown)`
  ${linkStyle}
` 