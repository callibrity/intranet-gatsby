import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Img from 'gatsby-image';
import { getEmployeeMetrics } from '@api/serviceCalls';
import { Container } from 'react-bootstrap';
import { UserContext } from '@globals/contexts';
import EmployeeSearch from './EmployeeSearch';
import GrowthHoursCard from './GrowthHoursCard';
import BillableHoursCard from './BillableHoursCard';
import { BillableTypes, GrowthTypes, ImageQuery } from '@globals/types';
import { dummyEmployeeData, billableDefault, growthDefault } from '@globals/constants';
const { Body } = Card;

type TrackerState = BillableTypes & GrowthTypes;

const TimeTracker = ({data} : ImageQuery) => {
  const { userRole } = useContext(UserContext);
  const [userData, setUserData] = useState<TrackerState>({billable: billableDefault, growth: growthDefault});

  const images = data.mugs.nodes.map((node) => node.childImageSharp.fixed);

  useEffect(() => {
    getEmployeeMetrics(setUserData, console.log);
  }, []);

  return userRole === 'Account Manager' ? (
    <>
      <Container style={{ marginBottom: 16 }}>
        <EmployeeSearch />
      </Container>
      {
  dummyEmployeeData.map(({employeeId, employeeName, billable, growth, updatedAt }) => {
    const img = images.find((image) => image.originalName === `${employeeId}.jpg`) || data.mugPlaceholder.childImageSharp.fixed;
    return (
    <CustomContainer  key={employeeId} style={{marginBottom: 10}}>
      <Card className={'mx-2 shadow-sm'}style={{ width: '14rem' }}>
        <StyledBody>
          <EmployeeName>{employeeName}</EmployeeName>
          <StyledImg fixed={img} />
        </StyledBody>
      </Card>
      <BillableHoursCard billable={billable} updatedAt={updatedAt} />
      <GrowthHoursCard growth={growth} updatedAt={updatedAt} />
    </CustomContainer>
  )})
    }
    </>
  )
    : (
      <>
        <CustomContainer id="custom-container-developer-context">
          <BillableHoursCard billable={userData.billable} updatedAt={userData.updatedAt} />
          <GrowthHoursCard growth={userData.growth} updatedAt={userData.updatedAt} />
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
