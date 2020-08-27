import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getEmployeeMetrics } from '@api/serviceCalls';
import DataCard from '../../components/home/DataCard';
import { BillableTypes, GrowthTypes } from '@globals/types';
import { billableConversion, growthConversion } from '@globals/helperFunctions';

type TrackerState = { billable: BillableTypes, growth: GrowthTypes, updatedAt: string };

const IndividualView = () => {
  const [userData, setUserData] = useState<TrackerState>();

  const { billable, growth, updatedAt } = userData;

  useEffect(() => {
    getEmployeeMetrics(setUserData, console.log);
  }, []);

  return (
    <CustomContainer id="custom-container-developer-context">
      <DataCard title='Billable Hours' data={billableConversion(billable)} updatedAt={updatedAt} />
      <DataCard title='Growth Time' data={growthConversion(growth)} updatedAt={updatedAt} />
    </CustomContainer>
  );
};

export default IndividualView;

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

