import { employeeMetricsString, employeeDetailsString, allEmployeeMetricsString } from '@globals/constants';

import { mockEmployeeMetricsProps, mockEmployeeDetails, mockAllEmployeeList } from '@globals/testConstants';


module.exports = {
  ...jest.requireActual('axios'),
  get: jest.fn((requestString: string) => {
    switch (requestString) {
      case employeeMetricsString:
        return Promise.resolve({ data: mockEmployeeMetricsProps });
      case employeeDetailsString:
        return Promise.resolve({ data: mockEmployeeDetails });
      case allEmployeeMetricsString:
        return Promise.resolve({ data: mockAllEmployeeList });
      default:
        break;
    }
  })
}
