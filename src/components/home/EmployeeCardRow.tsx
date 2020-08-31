import React from 'react';
import styled from 'styled-components';
import EmployeeImage from './EmployeeImage';
import MetricsCard from './MetricsCard';
import { billableConversion, growthConversion } from '@globals/helperFunctions';
import { EmployeeMetricTypes, FixedImage } from '@globals/types';

interface PropTypes {
  employeeMetrics: EmployeeMetricTypes,
  employeeId?: string,
  employeeName?: string,
  isLockedRow?: boolean,
  lockToggle?: Function,
  img?: FixedImage
}

const EmployeeCardRow = ({ employeeMetrics, employeeId, employeeName, isLockedRow, lockToggle, img }: PropTypes) => {
  const { billable, growth, updatedAt } = employeeMetrics;
  const imageElement = img ? <EmployeeImage img={img} employeeName={employeeName} employeeId={employeeId} isLockedRow={isLockedRow} lockToggle={lockToggle} /> : null;
  const billableElement = billable ? <MetricsCard title='Billable Hours' metrics={billableConversion(billable)} updatedAt={updatedAt} /> : null;
  const growthElement = growth ? <MetricsCard title='Growth Time' metrics={growthConversion(growth)} updatedAt={updatedAt} /> : null;
  return (
    <CustomContainer key={employeeId} >
      {imageElement}
      {billableElement}
      {growthElement}
    </CustomContainer>
  );
};

export default EmployeeCardRow

const CustomContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;