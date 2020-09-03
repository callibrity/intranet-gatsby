import React from 'react';
import { Col, Row } from 'react-bootstrap';
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
    <>
      <Row>
        <Col xs={12} gutters={1}>
          <h3 className="display-6">{title}</h3>
        </Col>
      </Row>
      <Row md={1} xl={2} className="justify-content-md-center mb-6">
        {metricsElements}
      </Row>
    </>
  );
};

export default MetricsCard;
