import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { getEmployeeMetrics } from '@api/serviceCalls';
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
  const dummyReturnData = [
    {
      employeeName: 'Collin Johnson',
      employeeId: '99999',
      billable: {
        currentHours: 7,
        currentTarget: 9,
        totalTarget: 50,
      },
      growth: {
        hoursUsed: 4,
        hoursRemaining: -1,
        totalGrowth: 3,
      },
    },
    {
      employeeName: 'Jordan Otrembiak',
      employeeId: '12345',
      billable: {
        currentHours: 23,
        currentTarget: 12,
        totalTarget: 50,
      },
      growth: {
        hoursUsed: 4,
        hoursRemaining: 10,
        totalGrowth: 3,
      },
    },
    {
      employeeName: 'Allen Hully',
      employeeId: '12346',
      billable: {
        currentHours: 7,
        currentTarget: 9,
        totalTarget: 50,
      },
      growth: {
        hoursUsed: 4,
        hoursRemaining: -1,
        totalGrowth: 3,
      },
    },
    {
      employeeName: 'Arielle Ferre',
      employeeId: '12347',
      billable: {
        currentHours: 7,
        currentTarget: 9,
        totalTarget: 50,
      },
      growth: {
        hoursUsed: 4,
        hoursRemaining: -1,
        totalGrowth: 3,
      },
    },
    {
      employeeName: 'Conner Manson',
      employeeId: '12348',
      billable: {
        currentHours: 7,
        currentTarget: 9,
        totalTarget: 50,
      },
      growth: {
        hoursUsed: 4,
        hoursRemaining: -1,
        totalGrowth: 3,
      },
    },
    {
      employeeName: 'Alex Morelli',
      employeeId: '12349',
      billable: {
        currentHours: 7,
        currentTarget: 9,
        totalTarget: 50,
      },
      growth: {
        hoursUsed: 4,
        hoursRemaining: -1,
        totalGrowth: 3,
      },
    },
  ];

  const [data, setData] = useState(initialState);

  useEffect(() => {
    getEmployeeMetrics(setData, console.log);
  }, []);

  return userRole === 'Account Manager' ? (
    <>
      <Container style={{ marginBottom: 16 }}>
        <EmployeeSearch />
      </Container>
      {
  dummyReturnData.map((employeeObject) => (
    <CustomContainer  key={employeeObject.employeeId} style={{marginBottom: 10}}>
      <Card className={'mx-2 shadow-sm'}style={{ width: '14rem' }}><Card.Body style={{alignSelf: 'center', justifyContent:'center'}}><h5 >{employeeObject.employeeName}</h5></Card.Body></Card>
      <BillableHoursCard billable={employeeObject.billable} updatedAt={employeeObject.updatedAt} />
      <GrowthHoursCard growth={employeeObject.growth} updatedAt={employeeObject.updatedAt} />
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
