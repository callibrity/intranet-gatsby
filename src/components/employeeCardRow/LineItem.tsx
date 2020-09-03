import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-bootstrap';


export const LineItem = ({ label, value } : {label: string, value: string | number}) => (
  <Col className="text-center">
    <h3>{value}</h3>
    <h6>{label}</h6>
  </Col>
);

export default LineItem;
 
