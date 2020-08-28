import React, { useEffect, useState } from 'react';
import { getEmployeeMetrics } from '@api/serviceCalls';
import { UserMetricTypes } from '@globals/types';
import EmployeeCardRow from '@home/EmployeeCardRow';

const IndividualView = () => {
  const [userMetrics, setUserMetrics] = useState<UserMetricTypes>();

  useEffect(() => {
    getEmployeeMetrics(setUserMetrics, console.log);
  }, []);

  return (
    <>
      {userMetrics && <EmployeeCardRow userMetrics={userMetrics} />}
    </>
  );
};

export default IndividualView;



