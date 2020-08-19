import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Image, Row, Col, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import Img from 'gatsby-image';

const loading = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "callibrity-logo.png" }) {
  //       childImageSharp {
  //         fixed(width: 132) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <Container style={{alignSelf: 'center'}}>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4}>
          Loading...
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4}>
          {/* <CustomContainer> */}
            {/* <Img fixed={data.file.childImageSharp.fixed} alt="Callibrity Logo" /> */}
            <Spinner animation="border" role="status" />
          {/* </CustomContainer> */}
        </Col>
      </Row>
    </Container>
  );
  // return <h1>Loading...</h1>;
}

export default loading;

const CustomContainer = styled.div`
  animation: rotation 2s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  transform-origin: center center;
`;