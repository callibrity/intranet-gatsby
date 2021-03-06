import React from 'react';
import styled from 'styled-components';
import { EmployeeMetricTypes } from '@globals/types';
import { billableTitle, growthTitle } from '@globals/constants';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { billableConversion, growthConversion } from './helperFunctions';
import EmployeeImage from './EmployeeImage';
import MetricsCard from './MetricsCard';

interface PropTypes {
  employeeMetrics: EmployeeMetricTypes,
  employeeId?: string,
  employeeName?: string,
  isLockedRow?: boolean,
  lockToggle?: Function,
  img: any,
}

const EmployeeCardRow = ({
  employeeMetrics, employeeId, employeeName, isLockedRow, lockToggle, img
}: PropTypes) => {
  const { billable, growth, updatedAt } = employeeMetrics;
  const imageElement = img ? <EmployeeImage img={img} employeeName={employeeName} employeeId={employeeId} isLockedRow={isLockedRow} lockToggle={lockToggle} /> : null;
  const billableElement = billable ? <MetricsCard title={billableTitle} metrics={billableConversion(billable)} updatedAt={updatedAt} /> : null;
  const growthElement = growth ? <MetricsCard title={growthTitle} metrics={growthConversion(growth)} updatedAt={updatedAt} /> : null;
  return (
    <CustomContainer fluid key={employeeId}>
      <Card className="shadow px-3">
        <Row>
          <ImageColumn xs={12} sm={12} md={4} lg={4}>
            {imageElement}
          </ImageColumn>
          <MetricsColumnTwo xs={12} sm={12} md={4} lg={4}>
            {billableElement}
          </MetricsColumnTwo>
          <MetricsColumnThree xs={12} sm={12} md={4} lg={4}>
            {growthElement}
          </MetricsColumnThree>
        </Row>
      </Card>
    </CustomContainer>
  );
};

export default EmployeeCardRow;

const CustomContainer = styled(Container)`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ImageColumn = styled(Col)`
  flex-direction: row;
`;

const MetricsColumnTwo = styled(Col)`
  padding-left: 24px;
  padding-right: 24px;
`;

const MetricsColumnThree = styled(Col)`
  padding-left: 24px;
  padding-right: 24px;
`;


