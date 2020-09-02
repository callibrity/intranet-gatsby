import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import styled from 'styled-components';
import Col from 'Col';
import Row from 'react-bootstrap/Row';
import LineItem from './LineItem';
import RenderTooltip from '../reusable/RenderTooltip';

interface PropTypes {
  metrics: { label: string, value: string | number }[],
  updatedAt: string,
  title: string
}

const MetricsCard = ({ metrics, updatedAt, title }: PropTypes) => {
  const metricsElements = metrics.map(({ label, value }) => <LineItem label={label} value={value} />);
  return (
    <>
    <Row className="justify-content-md-center">
      <Col xs={12}>
      <h3 className="display-5">{title}</h3>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
        {metricsElements}
    </Row>
    </>
  );
};

export default MetricsCard;
