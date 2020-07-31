import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    <Navbar variant="dark">
      <Row style={{ width: '100%' }}>
        <Col md={7} sm={6} xs={3} className='align-self-center pt-2'>
          <Nav>
            <Link to="/">
              <Img fixed={data.file.childImageSharp.fixed} alt="Callibrity Logo" />
            </Link>
          </Nav>
        </Col>
        <Col md={3} sm={6} xs={9} className='justify-content-center'>
          <Row >
            <Col xs={4} >
              <SearchBar />
            </Col>
            <Col xs={8} className='align-self-center'>
              <Row end="xs">
                <Col md="auto">
              <QuickLinks />    
              </Col>
              <Col md="auto">

              <UserDropdown  />
              </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Navbar>
  );
}
