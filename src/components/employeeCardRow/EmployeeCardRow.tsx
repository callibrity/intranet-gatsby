import React from 'react';
import styled from 'styled-components';
import { EmployeeMetricTypes, FixedImage } from '@globals/types';
import { billableTitle, growthTitle } from '@globals/constants';
import { Row, Container, Col } from 'react-bootstrap';
import { billableConversion, growthConversion } from './helperFunctions';
import EmployeeImage from './EmployeeImage';
import MetricsCard from './MetricsCard';

interface PropTypes {
  employeeMetrics: EmployeeMetricTypes,
  employeeId?: string,
  employeeName?: string,
  isLockedRow?: boolean,
  lockToggle?: Function,
};

const EmployeeCardRow = ({
  employeeMetrics, employeeId, employeeName, isLockedRow, lockToggle, img,
}: PropTypes) => {
  const { billable, growth, updatedAt } = employeeMetrics;
  const imageElement = img ? <EmployeeImage img={img} employeeName={employeeName} employeeId={employeeId} isLockedRow={isLockedRow} lockToggle={lockToggle} /> : null;
  const billableElement = billable ? <MetricsCard title={billableTitle} metrics={billableConversion(billable)} updatedAt={updatedAt} /> : null;
  const growthElement = growth ? <MetricsCard title={growthTitle} metrics={growthConversion(growth)} updatedAt={updatedAt} /> : null;
  return (
    <CustomContainer fluid key={employeeId}>
      <Row>
        <ImageColumn  className="justify-content-end">
          {imageElement}
        </ImageColumn>
        <MetricsColumnTwo>
          {billableElement}
        </MetricsColumnTwo>
        <MetricsColumnThree>
          {growthElement}
        </MetricsColumnThree>
      </Row>
    </CustomContainer>
  );
};

export default EmployeeCardRow;

const CustomContainer = styled(Container)`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const ImageColumn = styled(Col)`
  flex-direction: row;
`;

const MetricsColumnTwo = styled(Col)`
`;

const MetricsColumnThree = styled(Col)`
`;
