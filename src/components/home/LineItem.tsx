import React from 'react';
import styled from 'styled-components';

export const LineItem = ({ label, value } : {label: string, value: string | number}) => (
  <MetricItemContainer >
    <span>{value}</span>
    <span>{label}</span>

  </MetricItemContainer>
);

export default LineItem;
const MetricItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;