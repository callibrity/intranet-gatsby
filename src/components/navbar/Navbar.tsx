import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { UserContext } from '@globals/contexts';
import QuickLinks from './QuickLinks';
import UserDropdown from './UserDropdown';
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
  const { username } = useContext(UserContext);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Navbar variant="dark" className="shadow">
      <Navbar.Brand className="pl-md-5 mt-2">
        <Link to="/">
          <Img fixed={data.file.childImageSharp.fixed} alt="Callibrity Logo" />
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto pr-md-5">
        <SearchBar style={{marginRight: '10px'}}/>
        <QuickLinks />
        <UserDropdown />
      </Nav>
    </Navbar>
  );
}
