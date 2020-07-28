import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import NavLinks from './NavLinks';
import SearchBar from './SearchBar';

export default function Navbar() { 
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "callibrity-logo.png" }) {
        childImageSharp {
          fixed(width: 132) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Link to="/">
        <Img fixed={data.file.childImageSharp.fixed} alt="Callibrity Logo" />
      </Link>
      <SearchBar />
      <NavLinks />
    </Container>
  );
}

const Container = styled.div`
  color: white;
  background-color: ${({ theme: { darkerBlue } }) => darkerBlue};
  font-size: 16px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;
