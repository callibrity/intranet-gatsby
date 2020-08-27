import React from 'react';
import Card from 'react-bootstrap/Card';
import { OverlayTrigger } from 'react-bootstrap';
import LineItem from './LineItem';
import RenderTooltip from './RenderTooltip';

const { Body, Title } = Card;

interface PropTypes { 
  data: {label: string, value: string | number} [],
  updatedAt: string,
  title: string
}

export const DataCard = ({ data, updatedAt, title } : PropTypes) => {
  const dataList = data.map(({label, value}) => <LineItem label={label} value={value} />)
  return (
    <Card className="TimeTracker-Hours shadow-sm mx-2" id="tooltip">
      <Body>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => RenderTooltip(props, updatedAt)}
        >
          <div>
            <Title style={{ fontSize: '2.2rem' }}>{title}</Title>
            {dataList}
          </div>
        </OverlayTrigger>
      </Body>
    </Card>
  );
};

export default DataCard;
