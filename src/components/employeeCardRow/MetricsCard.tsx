import React from 'react';
import styled from 'styled-components';
import { Col, Row, Card } from 'react-bootstrap';
import { shadows } from '@material-ui/system';
import LineItem from './LineItem';

interface PropTypes {
  metrics: { label: string, value: string | number }[],
  updatedAt: string,
  title: string
}

const MetricsCard = ({ metrics, updatedAt, title }: PropTypes) => {
  const metricsElements = metrics.map(({ label, value }) => <LineItem label={label} value={value} />);
  return (
    <StyledCard>
      <Row>
        <Col xs={12} gutters={1}>
          <h2 style={{marginLeft: '24px', marginTop: '16px'}}>{title}</h2>
        </Col>
      </Row>
      <Row sm={1} lg={2} className="justify-content-md-center mb-4">
        {metricsElements}
      </Row>
    </StyledCard>
  );
};

export default MetricsCard;

const StyledCard = styled(Card)`
border-radius: 50px;
background: #ffffff;
box-shadow:  13px 13px 26px #d9d9d9, 
             -13px -13px 26px #ffffff;
`;
