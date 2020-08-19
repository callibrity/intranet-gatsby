import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Image, Row, Col, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import Img from 'gatsby-image';

const loading = () => (
    <Container>
      <Row className="justify-content-center align-items-center" style={{minHeight: '100%'}}>
        <Col xs={12} sm={4} md={4} className="justify-content-center">
          <Spinner animation="border" role="status" style={{ height: '200px', width: '200px', alignSelf: 'center' }} />
        </Col>
      </Row>
    </Container>
);

export default loading;