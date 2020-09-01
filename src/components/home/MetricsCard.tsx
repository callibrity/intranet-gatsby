import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
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
    <Jumbotron className="jumbotron-fluid shadow-sm mx-2" id="tooltip">
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={(props) => RenderTooltip(props, updatedAt)}
      >
        <span>
          <h1 className="display-4">{title}</h1>
          <ListGroup Horizontal>
          {metricsElements}
          </ListGroup>
        </span>
      </OverlayTrigger>
    </Jumbotron>
  );
};

export default MetricsCard;
