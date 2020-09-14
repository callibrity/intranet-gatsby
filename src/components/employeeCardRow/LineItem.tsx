import React from 'react';
import styled from 'styled-components';
import {  Col, Card } from 'react-bootstrap';

export const LineItem = ({ label, value } : {label: string, value: string | number}) => (
  <Col className="text-center px-3 py-3">
    <Card className="border-0 shadow-sm px-1">
      <div className="d-flex justify-content-between">
        <div>
          <h6>{label}</h6>
        </div>
        <div>
          <h6>{value}</h6>
        </div>
      </div>
    </Card>
  </Col>
);

export default LineItem;
