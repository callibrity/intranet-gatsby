import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export const LineItem = ({ label, value } : {label: string, value: string | number}) => (
  <Col className="text-center px-3 py-3">
    <Card className="border-0 shadow-sm px-5">
      <div className="d-flex justify-content-between">
        <div>
          <h6>{label}</h6>
        </div>
        <LineItemContainer>
          <LineItemValue>{value}</LineItemValue>
        </LineItemContainer>
      </div>
    </Card>
  </Col>
);

export default LineItem;

const LineItemContainer = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  position: relative;
`;

const LineItemValue = styled.h6`
  position: absolute; 
  top: 40%;
  transform: translate(0, -50%);
`;
