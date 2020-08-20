import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { getEmployeeMetrics, getAllEmployeeMetrics, getEmployeeDetails } from '@api/serviceCalls';
import { Tooltip, OverlayTrigger, Container } from 'react-bootstrap';
import { UserContext } from '@globals/contexts';
import EmployeeSearch from './EmployeeSearch';
import DebugComponent from '../reusable/DebugComponent';
import GrowthHoursCard from './GrowthHoursCard';
import BillableHoursCard from './BillableHoursCard';

const TimeTracker = () => {
  const { userRole } = useContext(UserContext);
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
  const [searchString, setSearchString] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(initialState);

  const setDataHandler = (output) => {
    setData(output);
    setLoading(false);
  };
  useEffect(() => {
    userRole === 'Account Manager' && getAllEmployeeMetrics(setDataHandler, console.log);
    userRole === 'Developer' && getEmployeeMetrics(setDataHandler, console.log);
  }, []);

  return userRole === 'Account Manager' ? (
    <>
      <Container style={{ marginBottom: 16 }}>
        <EmployeeSearch text={searchString} setText={setSearchString} />
      </Container>
      {
  (!loading && searchString.length > 1)
    && data.filter((developer) => developer.employeeName.toLowerCase().includes(searchString.toLowerCase())).map((developerObject) => (
      <CustomContainer key={developerObject.employeeId} style={{ marginBottom: 10 }}>
        <Card className="mx-2 shadow-sm" style={{ width: '14rem' }}><Card.Body style={{ alignSelf: 'center', justifyContent: 'center' }}><h5>{developerObject.employeeName}</h5></Card.Body></Card>
        <BillableHoursCard billable={developerObject.billable} updatedAt={developerObject.updatedAt} />
        <GrowthHoursCard growth={developerObject.growth} updatedAt={developerObject.updatedAt} />
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
  flexDirection: row;
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
