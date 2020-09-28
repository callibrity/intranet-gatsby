import React, { useEffect, useState } from 'react';
import { getEmployeeMetrics } from '@api/serviceCalls';
import { EmployeeMetricTypes } from '@globals/types';
import EmployeeCardRow from '@components/employeeCardRow/EmployeeCardRow';
import { billableMissing, growthMissing } from '@globals/constants';

const DeveloperView = () => {
  const [employeeMetrics, setEmployeeMetrics] = useState<EmployeeMetricTypes>();

  useEffect(() => {
    getEmployeeMetrics(setEmployeeMetrics);
  }, []);

  return (
    <>
      {employeeMetrics && <EmployeeCardRow employeeMetrics={employeeMetrics} />}
    </>
  );
};

export default DeveloperView;
