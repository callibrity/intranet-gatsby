import {
  newsAPIString,
  employeesAPINameString,
  employeesAPIOfficeString,
  mockNewsResponse,
  mockPeopleResponse,
  mockProfileResponse,
} from '@globals/testConstants';

export default function useAPI(apiString) {
  if (apiString === newsAPIString) {
    return mockNewsResponse;
  }
  if (apiString.contains(employeesAPIOfficeString)) {
    return mockPeopleResponse;
  }
  if (apiString.contains(employeesAPINameString)) {
    return mockProfileResponse;
  }
  return null;
}
