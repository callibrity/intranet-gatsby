import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '@home/Section';
import { EmployeeTimeTracking } from '@globals/constants';

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
  const { billable, growth } = EmployeeTimeTracking;
  return (
    <Container>
      <BillableHours billable={billable} />
      <GrowthHours growth={growth} />
    </Container>
  );
};

LineItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

BillableHours.defaultProps = {
  billable: {
    currentHours: 0,
    currentTarget: 0,
    totalTarget: 0,
  },
};

BillableHours.propTypes = {
  billable: PropTypes.shape({
    currentHours: PropTypes.number,
    currentTarget: PropTypes.number,
    totalTarget: PropTypes.number,
  }),
};

GrowthHours.defaultProps = {
  growth: {
    hoursUsed: 0,
    hoursRemaining: 0,
    totalGrowth: 0,
  },
};

GrowthHours.propTypes = {
  growth: PropTypes.shape({
    hoursUsed: PropTypes.number,
    hoursRemaining: PropTypes.number,
    totalGrowth: PropTypes.number,
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
