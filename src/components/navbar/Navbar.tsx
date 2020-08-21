import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { UserContext } from '@globals/contexts';
import QuickLinks from './QuickLinks';
import UserDropdown from './UserDropdown';
import SearchBar from './SearchBar';

const { Brand } = Navbar;

export default function navBar() {
  const {file: {childImageSharp: {fixed : callibrityLogo}}} = useStaticQuery(graphql`
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
    <Navbar variant="dark" className="shadow">
      <Brand className="pl-md-5 mt-2">
        <Link to="/">
          <Img fixed={callibrityLogo} alt="Callibrity Logo" />
        </Link>
      </Brand>
      {
       username && 
       <Nav className="ml-auto pr-md-5">
        <SearchBar />
        <QuickLinks />
        <UserDropdown />
      </Nav>
      }
    </Navbar>
  );
}
