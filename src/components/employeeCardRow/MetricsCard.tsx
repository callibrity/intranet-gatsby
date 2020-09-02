import React from 'react';
import Card from 'react-bootstrap/Card';
import { OverlayTrigger } from 'react-bootstrap';
import LineItem from './LineItem';
import RenderTooltip from '../reusable/RenderTooltip';
import styled from 'styled-components';
import { tooltipShowDelay, tooltipHideDelay } from '@globals/constants'

const { Body, Title } = Card;

interface PropTypes {
  metrics: { label: string, value: string | number }[],
  updatedAt: string,
  title: string
}

const MetricsCard = ({ metrics, updatedAt, title }: PropTypes) => {
  const metricsElements = metrics.map(({ label, value }) => <LineItem key={label} label={label} value={value} />)
  return (
    <StyledCard className="TimeTracker-Hours shadow-sm mx-2" id="tooltip">
      <Body>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: tooltipShowDelay, hide: tooltipHideDelay }}
          overlay={(props) => RenderTooltip(props, updatedAt)}
        >
          <div>
            <StyledTitle>{title}</StyledTitle>
            {metricsElements}
          </div>
        </OverlayTrigger>
      </Body>
    </StyledCard>
  );
};

export default MetricsCard;

const StyledTitle = styled(Title)`
  font-size: 2.2rem
`;

const StyledCard = styled(Card)`
  width: 26rem;
`;