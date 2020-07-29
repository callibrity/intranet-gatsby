import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Section from '@home/Section';
import { getEmployeeMetrics } from '@api/serviceCalls'; 

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

interface billableHoursPropTypes {
  billable: {
    currentHours: string | number,
    currentTarget: string | number,
    totalTarget: string | number
  }
}

const billableDefault = {
  currentHours: loadStr,
  currentTarget: loadStr,
  totalTarget: loadStr
}

export const BillableHours = ({ billable = billableDefault  } : billableHoursPropTypes ) => {
  const {currentHours, currentTarget, totalTarget} = billable;
  return (
    <Section color="green" label="Target Hours" className="TimeTracker-Hours">
      <LineItem label="Current Hours" value={currentHours} />
      <LineItem label="Current Target" value={currentTarget} />
      <LineItem label="Total Target" value={totalTarget} />
    </Section>
  );
};

interface growthHoursPropTypes {
  growth: {
    hoursUsed: string | number,
    hoursRemaining: string | number,
    totalGrowth: string | number
  }
}

const growthDefault = {
  hoursUsed: loadStr,
  hoursRemaining: loadStr,
  totalGrowth: loadStr
}

export const GrowthHours = ({ growth = growthDefault  } : growthHoursPropTypes ) => {
  const {hoursUsed, hoursRemaining, totalGrowth } = growth;
  return (
    <Section color="green" label="Growth Time" className="TimeTracker-Hours">
      <LineItem label="Hours Used" value={hoursUsed} />
      <LineItem label="Hours Remaining" value={hoursRemaining} />
      <LineItem label="Total Growth" value={totalGrowth} />
    </Section>
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
  };

  const [data, setData] = useState(initialState);

  useEffect(() => {
    // eslint-disable-next-line no-console
    getEmployeeMetrics(setData, console.log);
  }, []);

  return (
    <Container>
      <BillableHours billable={data.billable} />
      <GrowthHours growth={data.growth} />
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
