import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
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
        <Col xs={12}>
          <h3 className="display-6">{title}</h3>
        </Col>
      </Row>
      <Divider variant="inset" />
      <Row>
        {metricsElements}
      </Row>
    </>
  );
};

export default MetricsCard;
