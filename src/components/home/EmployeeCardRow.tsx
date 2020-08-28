import React from "react";
import styled from 'styled-components';
import EmployeeImage from './EmployeeImage';
import MetricsCard from './MetricsCard';
import { billableConversion, growthConversion } from '@globals/helperFunctions';
import { UserMetricTypes, FixedImage } from '@globals/types';

interface PropTypes {
  userMetrics: UserMetricTypes,
  employeeId?: string,
  employeeName?: string,
  isLockedRow?: boolean,
  lockToggle?: Function,
  img?: FixedImage
}

const EmployeeCardRow = ({ userMetrics, employeeId, employeeName, isLockedRow, lockToggle, img }: PropTypes) => {
  const { billable, growth, updatedAt } = userMetrics;
  const employeeImage = img ? <EmployeeImage img={img} employeeName={employeeName} employeeId={employeeId} isLockedRow={isLockedRow} lockToggle={lockToggle} /> : null;
  const billableCard = billable ? <MetricsCard title='Billable Hours' metrics={billableConversion(billable)} updatedAt={updatedAt} /> : null;
  const growthCard = growth ? <MetricsCard title='Growth Time' metrics={growthConversion(growth)} updatedAt={updatedAt} /> : null;
  return (
    <CustomContainer key={employeeId} style={{ marginBottom: 10 }}>
      {employeeImage}
      {billableCard}
      {growthCard}
    </CustomContainer>
  );
};

export default EmployeeCardRow

const CustomContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .TimeTracker-Hours {
    width: 26rem;

    .TimeTracker-Hours-details {
      display: flex;
      justify-content: space-between;
    }
  }
`;