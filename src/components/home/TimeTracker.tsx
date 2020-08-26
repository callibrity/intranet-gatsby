import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { getEmployeeMetrics, getAllEmployeeMetrics, getEmployeeDetails } from '@api/serviceCalls';
import { Container } from 'react-bootstrap';
import { UserContext } from '@globals/contexts';
import EmployeeSearch from './EmployeeSearch';
import GrowthHoursCard from './GrowthHoursCard';
import BillableHoursCard from './BillableHoursCard';
import { BillableTypes, GrowthTypes } from '@globals/types';
import { dummyEmployeeData, billableDefault, growthDefault } from '@globals/constants';
import DeveloperCardRow from './DeveloperCardRow';

type TrackerState = BillableTypes & GrowthTypes;

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

const SeparateFavorites = styled.div`
  display: block;
  border-top: 3px solid black;
  margin: 1em 0;
`;

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
