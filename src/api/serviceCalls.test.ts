import axios from 'axios';
import { getEmployeeMetrics, getAllEmployeeMetrics, getEmployeeDetails, getRequest } from '@api/serviceCalls';
import { navigate } from 'gatsby';
import { errorRoute, notFoundRoute } from '@globals/constants';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockImplementation(() => Promise.resolve({ data: 7 }));

const mockOnSuccess = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
})

describe('getRequest function', () => {
  it('should call axios with the request string', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: 7 }));

    await getRequest('test', mockOnSuccess)

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('test', expect.anything());
  })

  it('should call onSuccess function with data on success', async () => {

    await getRequest('test', mockOnSuccess)

    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
    expect(mockOnSuccess).toHaveBeenCalledWith(7);
  })

  it('should call onError function with 404 error message', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject({response: {status: 404}}));

    await getRequest('test', mockOnSuccess)

    expect(mockOnSuccess).toHaveBeenCalledTimes(0);
    
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(notFoundRoute);
  })

  it('should call onError function with any error message other than 404', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject({response: {status: 502}}));

    await getRequest('test', mockOnSuccess)

    expect(mockOnSuccess).toHaveBeenCalledTimes(0);
        
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(errorRoute);
  })
})

describe('getEmployeeMetrics function', () => {
  it('should call getRequest with the correct string', async () => {

    await getEmployeeMetrics(mockOnSuccess);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/employee/hours', expect.anything());

  })
})

describe('getEmployeeMetrics function', () => {
  it('should call getRequest with the correct string', async () => {

    await getEmployeeMetrics(mockOnSuccess);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/employee/hours', expect.anything());

  })
})

describe('getAllEmployeeMetrics function', () => {
  it('should call getRequest with the correct string', async () => {

    await getAllEmployeeMetrics(mockOnSuccess);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/employee/hours/all', expect.anything());

  })
})

describe('getAllEmployeeDetails function', () => {
  it('should call getRequest with the correct string', async () => {

    await getEmployeeDetails(mockOnSuccess);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/employee', expect.anything());

  })
})

