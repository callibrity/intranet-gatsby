/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Tooltip, OverlayTrigger, Container } from 'react-bootstrap';


const renderTooltip = (props, updatedAt) => (
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
interface BillableHoursPropTypes {
  billable: {
    currentHours: string | number,
    currentTarget: string | number,
    totalTarget: string | number
  }
}

const billableDefault = {
  currentHours: 'Loading...',
  currentTarget: 'Loading...',
  totalTarget: 'Loading...',
};

export const BillableHoursCard = ({ billable = billableDefault, updatedAt } : BillableHoursPropTypes) => {

  const { currentHours, currentTarget, totalTarget } = billable;
  return (

    <Card className="TimeTracker-Hours shadow-sm mx-2" id="tooltip">
      <Card.Body>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => renderTooltip(props, updatedAt)}
        >
          <div>
            <Card.Title style={{ fontSize: '2.2rem' }}>Billable Hours</Card.Title>
            <LineItem label="Current Hours" value={currentHours} />
            <LineItem label="Current Target" value={currentTarget} />
            <LineItem label="Total Target" value={totalTarget} />
          </div>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
};

export default BillableHoursCard;
