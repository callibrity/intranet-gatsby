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


  const [data, setData] = useState(initialState);

  const logstuff = (input) => { console.log(JSON.stringify(input, null, 2))  }

  useEffect(() => {
    userRole === 'Account Manager' && getAllEmployeeMetrics(setData, console.log);
    userRole === 'Developer' && getEmployeeMetrics(setData, console.log);
  }, []);

  return userRole === 'Account Manager' ? (
    <>
      <Container style={{ marginBottom: 16 }}>
        <EmployeeSearch />
      </Container>
      {
  data.length > 0 ? data.map((employeeObject) => (
    <CustomContainer  key={employeeObject.employeeId} style={{marginBottom: 10}}>
      <Card className={'mx-2 shadow-sm'}style={{ width: '14rem' }}><Card.Body style={{alignSelf: 'center', justifyContent:'center'}}><h5 >{employeeObject.employeeName}</h5></Card.Body></Card>
      <BillableHoursCard billable={employeeObject.billable} updatedAt={employeeObject.updatedAt} />
      <GrowthHoursCard growth={employeeObject.growth} updatedAt={employeeObject.updatedAt} />
    </CustomContainer>
  )) : <h1>no data</h1>
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
