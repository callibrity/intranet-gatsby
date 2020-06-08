import React, {useContext} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import QuickLinks from "./QuickLinks"
import UserDropdown from "./UserDropdown"
import { UserContext } from "../../globals/UserContext"
import { linkStyle } from "../../globals/styles"

export default function NavLinks() {
  const { username } = useContext(UserContext)
  return (
    <Container username={username}>
      <StyledLink to="/wiki">Wiki</StyledLink>
      <StyledLink to="/people">People</StyledLink>
      <QuickLinks />
      <UserDropdown />
    </Container>
  )
}

const Container = styled.div`
  display: ${({username}) => username ? "flex" : "none"};  
  font-size: 17.6px;
  font-weight: 600;
  color: white;
`

const StyledLink = styled(Link)`
    ${linkStyle}
`
