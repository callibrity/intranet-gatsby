import {
  employeesAPINameString,
  employeesAPIOfficeString,
  mockPeopleResponse,
  mockProfileResponse,
} from '@globals/testConstants';

export default function useAPI(apiString) {
  if (apiString.contains(employeesAPIOfficeString)) {
    return mockPeopleResponse;
  }
  if (apiString.contains(employeesAPINameString)) {
    return mockProfileResponse;
  }
  return null;
}
