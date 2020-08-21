import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { getEmployeeMetrics } from '@api/serviceCalls';
import { Container } from 'react-bootstrap';
import { UserContext } from '@globals/contexts';
import EmployeeSearch from './EmployeeSearch';
import GrowthHoursCard from './GrowthHoursCard';
import BillableHoursCard from './BillableHoursCard';
import { BillableTypes, GrowthTypes } from '@globals/types';
import { dummyEmployeeData, billableDefault, growthDefault } from '@globals/constants';

type TrackerState = BillableTypes & GrowthTypes;

const TimeTracker = () => {
  const { userRole } = useContext(UserContext);
  const [data, setData] = useState<TrackerState>({billable: billableDefault, growth: growthDefault});

  useEffect(() => {
    getEmployeeMetrics(setData, console.log);
  }, []);

  return userRole === 'Account Manager' ? (
    <>
      <Container style={{ marginBottom: 16 }}>
        <EmployeeSearch />
      </Container>
      {
  dummyEmployeeData.map(({employeeId, employeeName, billable, growth, updatedAt }) => (
    <CustomContainer  key={employeeId} style={{marginBottom: 10}}>
      <Card className={'mx-2 shadow-sm'}style={{ width: '14rem' }}><Card.Body style={{alignSelf: 'center', justifyContent:'center'}}><h5 >{employeeName}</h5></Card.Body></Card>
      <BillableHoursCard billable={billable} updatedAt={updatedAt} />
      <GrowthHoursCard growth={growth} updatedAt={updatedAt} />
    </CustomContainer>
  ))
    }
    </>
  )
    : (
      <>
        <CustomContainer id="custom-container-developer-context">
          <BillableHoursCard billable={data.billable} updatedAt={data.updatedAt} />
          <GrowthHoursCard growth={data.growth} updatedAt={data.updatedAt} />
        </CustomContainer>
      </>
    );
};

export default TimeTracker;

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
