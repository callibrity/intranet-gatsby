import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, Card } from 'react-bootstrap';

export const LineItem = ({ label, value } : {label: string, value: string | number}) => (
  <Col className="text-center px-3 py-3">
    <Card className="border-0 shadow-sm p-1">
    <div>
      <h3>{value}</h3>
    </div>
    <div>
      <h6>{label}</h6>
    </div>
    </Card>
  </Col>
);

export default LineItem;
