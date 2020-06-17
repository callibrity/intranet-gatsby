import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

import {wikiHomeLinks} from "@globals/constants"
import {whiteContainer} from "@globals/styles"

export default function Header() {
  const linkList = wikiHomeLinks.map(({label, link}) => (
    <StyledLink to={link} key={label}>{label}</StyledLink>
  ))

  return(
    <Container>
      <WelcomeContainer>
        <Message>Welcome to WikiCallibrity</Message>
        <Description>a place to share knowledge across Callibrity.</Description>
      </WelcomeContainer>
      <LinkListContainer>
        {linkList}
      </LinkListContainer>
    </Container>
  )
}

const Container = styled.div`
  ${whiteContainer}
  display: flex;
  justify-content: space-space-around;
  width: 100%;
`

const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Message = styled.div`
  font-size: 16px;
  color: ${props => props.theme.blue}
`

const Description = styled.div`
  font-size: 14px;
`

const LinkListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`

`
