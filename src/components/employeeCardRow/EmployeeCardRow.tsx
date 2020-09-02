import React from 'react';
import styled from 'styled-components';
import EmployeeImage from './EmployeeImage';
import MetricsCard from './MetricsCard';
import { billableConversion, growthConversion } from '@globals/helperFunctions';
import { EmployeeMetricTypes, FixedImage } from '@globals/types';
import { billableTitle, growthTitle } from '@globals/constants';

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
  const billableElement = billable ? <MetricsCard title={billableTitle} metrics={billableConversion(billable)} updatedAt={updatedAt} /> : null;
  const growthElement = growth ? <MetricsCard title={growthTitle} metrics={growthConversion(growth)} updatedAt={updatedAt} /> : null;
  return (
    <Container>
      {imageElement}
      {billableElement}
      {growthElement}
    </Container>
  );
};

export default EmployeeCardRow

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;