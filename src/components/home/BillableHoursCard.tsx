import React from 'react';
import Card from 'react-bootstrap/Card';
import { OverlayTrigger } from 'react-bootstrap';
import LineItem from './LineItem';
import RenderTooltip from './RenderTooltip';
import { BillableTypes } from '@globals/types';
import { billableDefault } from '@globals/constants';

const { Body, Title } = Card;

export const BillableHoursCard = ({ billable = billableDefault, updatedAt } : BillableTypes) => {
  const { currentHours, currentTarget, totalTarget } = billable;
  return (
    <Card className="TimeTracker-Hours shadow-sm mx-2" id="tooltip">
      <Body>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => RenderTooltip(props, updatedAt)}
        >
          <div>
            <Title style={{ fontSize: '2.2rem' }}>Billable Hours</Title>
            <LineItem label="Current Hours" value={currentHours} />
            <LineItem label="Current Target" value={currentTarget} />
            <LineItem label="Total Target" value={totalTarget} />
          </div>
        </OverlayTrigger>
      </Body>
    </Card>
  );
};

export default BillableHoursCard;
