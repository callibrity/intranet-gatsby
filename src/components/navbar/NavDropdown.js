import React from "react"
import PropTypes from "prop-types"
import { Dropdown } from "react-bootstrap"
import styled from "styled-components"
import { linkStyle } from "@globals/styles"

export default function UserDropdown({ label, children }) {
  const { Toggle, Menu } = Dropdown
  return (
    <StyledDropdown>
      <Toggle as="a">{label}</Toggle>
      <Menu>
        {children}
      </Menu>
    </StyledDropdown>
  )
}

UserDropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
  ]).isRequired,
  label: PropTypes.string.isRequired,
}

const StyledDropdown = styled(Dropdown)`
  ${linkStyle}
`
