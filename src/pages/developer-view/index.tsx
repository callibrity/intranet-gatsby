import React, { useEffect, useState } from 'react';
import { getEmployeeMetrics } from '@api/serviceCalls';
import { EmployeeMetricTypes } from '@globals/types';
import EmployeeCardRow from '@components/employeeCardRow/EmployeeCardRow';
import { billableMissing, growthMissing } from '@globals/constants';

const DeveloperView = () => {
  const [employeeMetrics, setEmployeeMetrics] = useState<EmployeeMetricTypes>();

  const setNoData = (err: any) => {
    console.log(err.message);
    if (err.response.status === 404) {
      setEmployeeMetrics({billable: billableMissing, growth: growthMissing, updatedAt: 'n/a'});
    }
  }

  useEffect(() => {
    getEmployeeMetrics(setEmployeeMetrics, setNoData);
  }, []);

  return (
    <>
      {employeeMetrics && <EmployeeCardRow employeeMetrics={employeeMetrics} />}
    </>
  );
};

export default DeveloperView;
