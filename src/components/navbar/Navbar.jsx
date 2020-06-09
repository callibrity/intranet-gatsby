import React from "react"
import styled from "styled-components"
import NavLinks from "./NavLinks"
import SearchBar from "./SearchBar"
import { Link, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Navbar() {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "callibrity-logo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 132) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Link to="/">
        <Img fixed={data.file.childImageSharp.fixed} alt="Callibrity Logo" />
      </Link>
      <SearchBar />
      <NavLinks />
    </Container>
  )
}

const Container = styled.div`
  color: white;
  background-color: ${({ theme: { darkerBlue } }) => darkerBlue};
  font-size: 16px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
`
