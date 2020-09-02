import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-bootstrap';


export const LineItem = ({ label, value } : {label: string, value: string | number}) => (
  <Col xs={12} className="text-center">
    <h4>{value}</h4>
    <h5>{label}</h5>
  </Col>
);

export default LineItem;
 
