import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { UserContext } from '@globals/contexts';
import Logout from './Logout';
import { quickLinks } from '@globals/constants';
import NavDropdown from './NavDropdown';

const { Brand } = Navbar;

export default function NavbarComponent() {
  const { file: { childImageSharp: { fixed: callibrityLogo } } } = useStaticQuery(graphql`
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

  const linkList = quickLinks.map(({ title, url }) => <a href={url} target="_blank">{title}</a>)

  return (
    <Navbar variant="dark" className="shadow mb-4">
      <Brand className="pl-md-5 mt-2">
        <Link to="/">
          <Img fixed={callibrityLogo} alt="Callibrity Logo" />
        </Link>
      </Brand>
      {
        username &&
        <Nav className="ml-auto pr-md-5">
          <NavDropdown label={"Quick Links"} items={linkList} />
          <NavDropdown label={username} items={[<Logout />]} />
        </Nav>
      }
    </Navbar>
  );
}
