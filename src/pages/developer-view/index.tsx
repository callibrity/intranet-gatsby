import React, { useEffect, useState, useContext } from 'react';
import { getEmployeeMetrics } from '@api/serviceCalls';
import { EmployeeMetricTypes } from '@globals/types';
import { UserContext } from '@globals/contexts';
import EmployeeCardRow from '@components/employeeCardRow/EmployeeCardRow';
import Container from 'react-bootstrap/Container';

const DeveloperView = () => {
  const [employeeMetrics, setEmployeeMetrics] = useState<EmployeeMetricTypes>();
  const { username } = useContext(UserContext);

  useEffect(() => {
    getEmployeeMetrics(setEmployeeMetrics);
  }, []);

  return (
    <Container>
      <h1>Welcome, {username}</h1>
      {employeeMetrics && <EmployeeCardRow employeeMetrics={employeeMetrics} />}
    </Container>
  );
};

export default DeveloperView;
