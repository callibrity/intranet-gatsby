import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';

export default function navBar() { 
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
    <Navbar bg="dark">
      <Link to="/">
        <Img fixed={data.file.childImageSharp.fixed} alt="Callibrity Logo" />
      </Link>
      <SearchBar />
      <NavLinks />
    </Navbar>
  );
}

const Container = styled.div`
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;
