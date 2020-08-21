/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Tooltip, OverlayTrigger, Container } from 'react-bootstrap';
import { OverlayInjectedProps } from 'react-bootstrap/Overlay';

const renderTooltip = (props: OverlayInjectedProps, updatedAt: string) => (
  <Tooltip id="tooltip" {...props}>
    {updatedAt}
  </Tooltip>
);

export const LineItem = ({ label, value } : {label: string, value: string | number}) => (
  <div className="TimeTracker-Hours-details">
    <span>{label}:</span>
    <span>{value}</span>
  </div>
);

interface GrowthHoursPropTypes {
    growth: {
      hoursUsed: string | number,
      hoursRemaining: string | number,
      totalGrowth: string | number
    },
    updatedAt: string
  }

const growthDefault = {
  hoursUsed: 'Loading...',
  hoursRemaining: 'Loading',
  totalGrowth: 'Loading...',
};

export const GrowthHoursCard = ({ growth = growthDefault, updatedAt } : GrowthHoursPropTypes) => {
  const { hoursUsed, hoursRemaining, totalGrowth } = growth;
  return (
    <Card className="TimeTracker-Hours shadow-sm mx-2">
      <Card.Body>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => renderTooltip(props, updatedAt)}
        >
          <div>
            <Card.Title style={{ fontSize: '2.2rem' }}>Growth Time</Card.Title>
            <LineItem label="Hours Used" value={hoursUsed} />
            <LineItem label="Hours Remaining" value={hoursRemaining} />
            <LineItem label="Total Growth" value={totalGrowth} />
          </div>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
};

export default GrowthHoursCard;
