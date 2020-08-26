import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { getEmployeeMetrics, getAllEmployeeMetrics, getEmployeeDetails } from '@api/serviceCalls';
import { Tooltip, OverlayTrigger, Container } from 'react-bootstrap';
import { UserContext } from '@globals/contexts';
import Button from 'react-bootstrap/Button';
import { string } from 'prop-types';
import { IconContext } from 'react-icons';
import { MdLock, MdLockOpen } from 'react-icons/md';
import EmployeeSearch from './EmployeeSearch';
import DebugComponent from '../reusable/DebugComponent';
import GrowthHoursCard from './GrowthHoursCard';
import BillableHoursCard from './BillableHoursCard';

interface ITrackerState {
  employeeName: string,
  employeeId: string,
  billable: {
    currentHours: string | number,
    currentTarget: string | number,
    totalTarget: string | number
  },
  growth: {
    hoursUsed: string | number,
    hoursRemaining: string | number,
    totalGrowth: string | number
  },
  updatedAt: string
}

// type trackerReturnData = ({ employeeName: string, employeeId: string, updatedAt?: string } & ITrackerState)[];

// const initialState : ITrackerState = {
//   employeeName: 'Loading...',
//   employeeName: 'Loading...',
//   billable: {
//     currentHours: 'Loading...',
//     currentTarget: 'Loading...',
//     totalTarget: 'Loading...',
//   },
//   growth: {
//     hoursUsed: 'Loading...',
//     hoursRemaining: 'Loading...',
//     totalGrowth: 'Loading...',
//   },
//   updatedAt: 'Loading...',
// };

const DeveloperCardRow = ({ developerData, isLockedRow, lockToggle }) => {

  const {
    employeeId, employeeName, updatedAt, billable, growth,
  } = developerData;
  return (
    <CustomContainer key={employeeId} style={{ marginBottom: 10 }}>
      <Card className="mx-2 shadow-sm" style={{ width: '14rem' }}>
        <Card.Body style={{ alignSelf: 'center', justifyContent: 'center' }}>
          <Card.Title>
            {employeeName}
          </Card.Title>
        </Card.Body>
        <Card.Text className="text-center pb-0">
          {' '}
          <Button id={employeeId} variant="dark" style={{ borderTopLeftRadius: 100, borderTopRightRadius: 100 }} onClick={(e) => {lockToggle(employeeId);}}>{isLockedRow === 'true' ? <MdLock /> : <MdLockOpen />}</Button>
        </Card.Text>
      </Card>
      <BillableHoursCard billable={billable} updatedAt={updatedAt} />
      <GrowthHoursCard growth={growth} updatedAt={updatedAt} />
    </CustomContainer>
  );
};
const TimeTracker = () => {
  const { userRole } = useContext(UserContext);
  const [data, setData] = useState([]);
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
  const isLocked = (employeeId: string): boolean => favoritesList.includes(employeeId);
  const favoriteListToggleHandler = (employeeId: string) => {

    if (isLocked(employeeId)) { setFavoritesList(favoritesList.filter((favoriteId) => favoriteId !== employeeId)); } else { setFavoritesList([...favoritesList, employeeId]); }
    
  };

  return (userRole === 'Account Manager'
    ? (
      <>
        <Container style={{ marginBottom: 16 }}>
          <EmployeeSearch text={searchString} setText={setSearchString} />
        </Container>

        {
          (!loading)
            && data.filter((developer) => favoritesList.includes(developer.employeeId)).map((developerObject) => (
              <DeveloperCardRow key={developerObject.employeeId} developerData={developerObject} isLockedRow="true" lockToggle={favoriteListToggleHandler} />
            ))
          }
        <SeparateFavorites />
        {
            (!loading && searchString.length > 1)
              && data.filter((developer) => (developer.employeeName.toLowerCase().includes(searchString.toLowerCase())) && !favoritesList.includes(developer.employeeId)).map((developerObject) => (
                <DeveloperCardRow key={developerObject.employeeId} developerData={developerObject} isLockedRow="false" lockToggle={favoriteListToggleHandler} />
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
    ));
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
