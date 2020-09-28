import axios from 'axios';
import { pactWith, getProviderBaseUrl } from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
import { setJwt } from '@api/api';
import {
  getEmployeeMetrics, getAllEmployeeMetrics, getEmployeeDetails, getRequest, getEmployee,
  getEmployeeMetrics, getAllEmployeeMetrics, getEmployeeDetails, getRequest,
} from '@api/serviceCalls';
import { employeeDetailsString, errorRoute, notFoundRoute } from '@globals/constants';

import { navigate } from 'gatsby';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockImplementation(() => Promise.resolve({ data: 7 }));

const mockOnSuccess = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe('getRequest function', () => {
  it('should call axios with the request string', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: 7 }));

    await getRequest('test', mockOnSuccess);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('test', expect.anything());
  });

  it('should call onSuccess function with data on success', async () => {
    await getRequest('test', mockOnSuccess);

    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
    expect(mockOnSuccess).toHaveBeenCalledWith(7);
  });

  it('should call onError function with 404 error message', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject({ response: { status: 404 } }));

    await getRequest('test', mockOnSuccess);

    expect(mockOnSuccess).toHaveBeenCalledTimes(0);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(notFoundRoute);
  });

  it('should call onError function with any error message other than 404', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject({ response: { status: 502 } }));

    await getRequest('test', mockOnSuccess);

    expect(mockOnSuccess).toHaveBeenCalledTimes(0);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(errorRoute);
  });
});

describe('getEmployeeMetrics function', () => {
  it('should call getRequest with the correct string', async () => {
    await getEmployeeMetrics(mockOnSuccess);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/employee/hours', expect.anything());
  });
});

describe('getEmployeeMetrics function', () => {
  it('should call getRequest with the correct string', async () => {
    await getEmployeeMetrics(mockOnSuccess);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/employee/hours', expect.anything());
  });
});

describe('getAllEmployeeMetrics function', () => {
  it('should call getRequest with the correct string', async () => {
    await getAllEmployeeMetrics(mockOnSuccess);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/employee/hours/all', expect.anything());
  });
});

describe('getAllEmployeeDetails function', () => {
  it('should call getRequest with the correct string', async () => {
    await getEmployeeDetails(mockOnSuccess);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/employee', expect.anything());
  });
});

// begin pact testing
// pactWith({ consumer: 'MyConsumer', provider: 'MyProvider' }, (provider) => {
//   describe('Employee data api', () => {
//     // set jwt as it is used in employee call to retrieve employee data
//     // it should be expected as a minimum response from the back end service
//     setJwt('MockJWTTokenForEmployeeCall');
//     let client;
//     beforeEach(() => {
//       client = getEmployee(provider.mockService.baseUrl)
//     });
//     // here is the mock you are anticipating from a successful API call
//     // the same mock should be used in the component tests that impact rendering
//     const EMPLOYEE_DATA = {
//       username: 'testUsername',
//       userEmail: 'testUserEmail',
//       userRole: 'testUserRole',
//     };

//     const employeeSuccessResponse = {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: JWT_TOKEN,
//       },
//       body: EMPLOYEE_DATA,
//     };

//     const employeeDataRequest = {
//       uponReceiving: 'a get request for this employees user information',
//       withRequest: {
//         method: 'GET',
//         path: '/employee',
//         headers: {
//           Accept: 'application/json',
//         },
//       },
//     };
//     beforeEach(() => {
//       const interaction = {
//         state: 'I have user data for the requested user',
//         ...employeeDataRequest,
//         willRespondWith: employeeSuccessResponse,
//       };
//       return provider.addInteraction(interaction);
//     });

//     // add expectations
//     let details;
//     const expectEmployeeDetails = (data) => details = data;

//     it('returns a successful body', () => getEmployee(
//       {url: provider.mockService.baseUrl}
//     ).then((data) => {
//       expect(data).toEqual(EMPLOYEE_DATA);
//     }));
//   });
// });
