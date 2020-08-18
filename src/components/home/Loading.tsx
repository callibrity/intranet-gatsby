import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const loading = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "callibrity-logo.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 400, maxHeight: 250) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `);

  // return (
  //   <Row className="justify-content-md-center">
  //     <Col xs={12} sm={4} md={4}>
  //       <CustomContainer>
  //         <Image src={data.file.childImageSharp.fixed} alt="Callibrity Logo" />
  //       </CustomContainer>
  //     </Col>
  //   </Row>
  // );
  return <h1>Loading...</h1>;
}

export default loading;

const CustomContainer = styled.div`
  animation: rotation 8s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;