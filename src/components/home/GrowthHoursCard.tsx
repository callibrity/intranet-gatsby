import React from 'react';
import Card from 'react-bootstrap/Card';
import { OverlayTrigger } from 'react-bootstrap';
import LineItem from './LineItem';
import RenderTooltip from './RenderTooltip';
import { GrowthTypes } from '@globals/types';
import { growthDefault } from '@globals/constants';

const {Body, Title} = Card;

export const GrowthHoursCard = ({ growth = growthDefault, updatedAt } : GrowthTypes) => {
  const { hoursUsed, hoursRemaining, totalGrowth } = growth;
  return (
    <Card className="TimeTracker-Hours shadow-sm mx-2">
      <Body>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => RenderTooltip(props, updatedAt)}
        >
          <div>
            <Title style={{ fontSize: '2.2rem' }}>Growth Time</Title>
            <LineItem label="Hours Used" value={hoursUsed} />
            <LineItem label="Hours Remaining" value={hoursRemaining} />
            <LineItem label="Total Growth" value={totalGrowth} />
          </div>
        </OverlayTrigger>
      </Body>
    </Card>
  );
};

export default GrowthHoursCard;
