import React from "react";
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Img from 'gatsby-image';
import { MdLock, MdLockOpen } from 'react-icons/md';
import DataCard from './DataCard';
import { billableConversion, growthConversion } from '@globals/helperFunctions';

const {Title, Body, Text} = Card;

const DeveloperCardRow = ({ developerData, isLockedRow, lockToggle, img }) => {
  const {
    employeeId, employeeName, updatedAt, billable, growth,
  } = developerData;
  return (
    <CustomContainer key={employeeId} style={{ marginBottom: 10 }}>
      <Card className="mx-2 shadow-sm" style={{ width: '14rem' }}>
        <Body style={{ alignSelf: 'center', justifyContent: 'center' }}>
          <Title>
            {employeeName}
          </Title>
          <Img fixed={img} />
        </Body>
        <Text className="text-center pb-0">
          {' '}
          <Button id={employeeId} variant="dark" style={{ borderTopLeftRadius: 100, borderTopRightRadius: 100 }} onClick={(e) => {lockToggle(employeeId);}}>{isLockedRow ? <MdLock /> : <MdLockOpen />}</Button>
        </Text>
      </Card>
      <DataCard title='Billable Hours' data={billableConversion(billable)} updatedAt={updatedAt} />
      <DataCard title='Growth Time' data={growthConversion(growth)} updatedAt={updatedAt} />
    </CustomContainer>
  );
};

export default DeveloperCardRow

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

const StyledBody = styled(Body)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled(Img)`
  border-radius: 5px;
`;

const EmployeeName = styled.h5`
  text-align: center;
`;