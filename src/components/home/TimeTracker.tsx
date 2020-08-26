import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { getEmployeeMetrics, getAllEmployeeMetrics, getEmployeeDetails } from '@api/serviceCalls';
import { Container } from 'react-bootstrap';
import { UserContext } from '@globals/contexts';
import EmployeeSearch from './EmployeeSearch';
import GrowthHoursCard from './GrowthHoursCard';
import BillableHoursCard from './BillableHoursCard';
import { BillableTypes, GrowthTypes, ImageQuery } from '@globals/types';
import { dummyEmployeeData, billableDefault, growthDefault } from '@globals/constants';
import DeveloperCardRow from './DeveloperCardRow';

type TrackerState = BillableTypes & GrowthTypes;

const TimeTracker = ({data} : ImageQuery) => {
  const { userRole } = useContext(UserContext);
  const [userData, setUserData] = useState<TrackerState>([]);
  const [searchString, setSearchString] = React.useState('');
  const [favoritesList, setFavoritesList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const setDataHandler = (output) => {
    setUserData(output);
    setLoading(false);
  };

  const images = data.mugs.nodes.map((node) => node.childImageSharp.fixed);

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
            && userData.filter((developer) => favoritesList.includes(developer.employeeId)).map((developerObject) => {
              const img = images.find((image) => image.originalName === `${developerObject.employeeId}.jpg`) || data.mugPlaceholder.childImageSharp.fixed;
              return <DeveloperCardRow 
                key={developerObject.employeeId} 
                developerData={developerObject}  
                isLockedRow="true" 
                lockToggle={favoriteListToggleHandler} 
                img={img}
              />
            })
          }
        <SeparateFavorites />
        {
            (!loading && searchString.length > 1)
              && userData.filter((developer) => (developer.employeeName.toLowerCase().includes(searchString.toLowerCase())) && !favoritesList.includes(developer.employeeId)).map((developerObject) => (
                <DeveloperCardRow key={developerObject.employeeId} developerData={developerObject} isLockedRow="false" lockToggle={favoriteListToggleHandler} img={data.mugPlaceholder.childImageSharp.fixed}/>
              ))
          }
      </>
    ) : (
      <>
        <CustomContainer id="custom-container-developer-context">
          <BillableHoursCard billable={userData.billable} updatedAt={userData.updatedAt} />
          <GrowthHoursCard growth={userData.growth} updatedAt={userData.updatedAt} />
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

