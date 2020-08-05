import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { getEmployeeMetrics } from '@api/serviceCalls';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const renderTooltip = (props, dbUpdate) => (
  <Tooltip id="tooltip" {...props}>
    {dbUpdate && dbUpdate.timeLastUpdated}
  </Tooltip>
);

const loadStr = 'Loading...';

export const LineItem = ({ label, value } : {label: string, value: string | number}) => (
  <div className="TimeTracker-Hours-details">
    <span>
      {label}
      :
    </span>
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
  currentHours: loadStr,
  currentTarget: loadStr,
  totalTarget: loadStr,
};

export const BillableHours = ({ billable = billableDefault, dbUpdate } : BillableHoursPropTypes) => {
  const { currentHours, currentTarget, totalTarget } = billable;
  return (

    <Card style={{ width: '28rem' }} className="TimeTracker-Hours shadow-sm" id="tooltip">
        <Card.Body >
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={ props => renderTooltip(props, dbUpdate) }
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

interface GrowthHoursPropTypes {
  growth: {
    hoursUsed: string | number,
    hoursRemaining: string | number,
    totalGrowth: string | number
  }
}

const growthDefault = {
  hoursUsed: loadStr,
  hoursRemaining: loadStr,
  totalGrowth: loadStr,
};

export const GrowthHours = ({ growth = growthDefault, dbUpdate } : GrowthHoursPropTypes) => {
  const { hoursUsed, hoursRemaining, totalGrowth } = growth;
  return (
    <Card style={{ width: '28rem' }} className="TimeTracker-Hours shadow-sm">
      <Card.Body>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={ props => renderTooltip(props, dbUpdate) }
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

const TimeTracker = () => {
  const initialState = {
    billable: {
      currentHours: 'Loading...',
      currentTarget: 'Loading...',
      totalTarget: 'Loading...',
    },
    growth: {
      hoursUsed: 'Loading...',
      hoursRemaining: 'Loading...',
      totalGrowth: 'Loading...',
    },
    dbUpdate: {
      timeLastUpdated: 'Loading...',
    }
  };

  const [data, setData] = useState(initialState);

  useEffect(() => {
    // eslint-disable-next-line no-console
    getEmployeeMetrics(setData, console.log);
  }, []);

  return (
    <Container>
      <BillableHours billable={data.billable} dbUpdate={data.dbUpdate} />
      <GrowthHours growth={data.growth} dbUpdate={data.dbUpdate} />
    </Container>
  );
};

export default TimeTracker;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .TimeTracker-Hours {
    margin: 8px;
    width: 500px;
    min-width: 300px;

    .TimeTracker-Hours-details {
      display: flex;
      justify-content: space-between;
    }
  }
`;
