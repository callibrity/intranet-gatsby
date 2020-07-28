import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '@home/Section';
import { getEmployeeMetrics } from '@api/serviceCalls';

export const LineItem = ({ label, value }) => (
  <div className="TimeTracker-Hours-details">
    <span>
      {label}
      :
    </span>
    <span>{value}</span>
  </div>
);

export const BillableHours = ({ billable }) => {
  const { currentHours, currentTarget, totalTarget } = billable; 

  return (
    <Section color="green" label="Target Hours" className="TimeTracker-Hours">
      <LineItem label="Current Hours" value={currentHours} />
      <LineItem label="Current Target" value={currentTarget} />
      <LineItem label="Total Target" value={totalTarget} />
    </Section>
  );
};

export const GrowthHours = ({ growth }) => {
  const { hoursUsed, hoursRemaining, totalGrowth } = growth;

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

LineItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

BillableHours.defaultProps = {
  billable: {
    currentHours: 'Loading...',
    currentTarget: 'Loading...',
    totalTarget: 'Loading...',
  },
};

BillableHours.propTypes = {
  billable: PropTypes.shape({
    currentHours: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    currentTarget: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    totalTarget: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};

GrowthHours.defaultProps = {
  growth: {
    hoursUsed: 'Loading...',
    hoursRemaining: 'Loading...',
    totalGrowth: 'Loading...',
  },
};

GrowthHours.propTypes = {
  growth: PropTypes.shape({
    hoursUsed: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    hoursRemaining: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    totalGrowth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
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
