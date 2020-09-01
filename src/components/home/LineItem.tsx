import React from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap/ListGroup';

export const LineItem = ({ label, value } : {label: string, value: string | number}) => (
  <MetricItemContainer >
    <p className="h6">{value}</p>
    <p className="h7 bold">{label}</p>

  </MetricItemContainer>
);

export default LineItem;
const MetricItemContainer = styled(ListGroup.Item)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
