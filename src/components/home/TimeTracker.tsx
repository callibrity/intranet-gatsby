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
import Button from 'react-bootstrap/Button';

interface ITrackerState {
  billable: {
    currentHours: string | number,
    currentTarget: string | number,
    totalTarget: string | number
  },
  growth: {
    hoursUsed: string | number,
    hoursRemaining: string | number,
    totalGrowth: string | number
  }
}

type trackerReturnData =  ({ employeeName: string, employeeId: string, updatedAt?: string } & ITrackerState)[];

const initialState : ITrackerState = {
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

const TimeTracker = () => {
  const { userRole } = useContext(UserContext);
  const [data, setData] = useState<ITrackerState>(initialState);
  const [searchString, setSearchString] = React.useState('');
  const [favoritesList, setFavoritesList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const setDataHandler = (output) => {
    setData(output);
    setLoading(false);
  };
  useEffect(() => {
    userRole === 'Account Manager' && getAllEmployeeMetrics(setDataHandler, console.log);
    userRole === 'Developer' && getEmployeeMetrics(setDataHandler, console.log);
  }, []);

  return userRole === 'Account Manager' ?
    (
      <>
        <Container style={{ marginBottom: 16 }}>
          <EmployeeSearch text={searchString} setText={setSearchString} />
        </Container>
        {
          (!loading)
            && data.filter((developer) => favoritesList.includes(developer.employeeId)).map((developerObject) => (
              <CustomContainer key={developerObject.employeeId} style={{ marginBottom: 10 }}>
                <Card className="mx-2 shadow-sm" style={{ width: '14rem' }}>
                  <Card.Body style={{ alignSelf: 'center', justifyContent: 'center' }}>
                    <h5>{developerObject.employeeName}</h5><br />
                    <Button variant="secondary" block onClick={() => {
                      if (favoritesList.includes(developerObject.employeeId))
                      {setFavoritesList(favoritesList.filter((employeeId) => employeeId !== developerObject.employeeId))}}}>Unlock</Button>
                  </Card.Body>
                </Card>
                <BillableHoursCard billable={developerObject.billable} updatedAt={developerObject.updatedAt} />
                <GrowthHoursCard growth={developerObject.growth} updatedAt={developerObject.updatedAt} />
              </CustomContainer>
            ))
          }
          <SeparateFavorites />
          {
            (!loading && searchString.length > 1)
              && data.filter((developer) => (developer.employeeName.toLowerCase().includes(searchString.toLowerCase())) && !favoritesList.includes(developer.employeeId)).map((developerObject) => (
                <CustomContainer key={developerObject.employeeId} style={{ marginBottom: 10 }}>
                  <Card className="mx-2 shadow-sm" style={{ width: '14rem' }}>
                    <Card.Body style={{ alignSelf: 'center', justifyContent: 'center' }}>
                      <h5>{developerObject.employeeName}</h5><br />
                      <Button variant="secondary" block onClick={() => {
                        if (!favoritesList.includes(developerObject.employeeId))
                        {setFavoritesList([...favoritesList, developerObject.employeeId])}}}>Lock</Button>
                    </Card.Body>
                  </Card>
                  <BillableHoursCard billable={developerObject.billable} updatedAt={developerObject.updatedAt} />
                  <GrowthHoursCard growth={developerObject.growth} updatedAt={developerObject.updatedAt} />
                </CustomContainer>
            ))
          }
      </>
    ) : (
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

const SeparateFavorites = styled.div`
  display: block;
  border-top: 3px solid black;
  margin: 1em 0;
`;