import axios from 'axios';
import { getEmployeeMetrics, getAllEmployeeMetrics, getEmployeeDetails, getRequest } from '@api/serviceCalls';
import { promises } from 'fs';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockImplementation(() => Promise.resolve({ data: 7 }));

const mockOnSuccess = jest.fn();
const mockOnFail = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
})

describe('getRequest function', () => {
  it('should call axios with the request string', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: 7 }));

    await getRequest('test', mockOnSuccess, mockOnFail)

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/test', expect.anything());
  })

  it('should call onSuccess function with data on success', async () => {

    await getRequest('test', mockOnSuccess, mockOnFail)

    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
    expect(mockOnSuccess).toHaveBeenCalledWith(7);
  })

  it('should call onError function with error message', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error('errorMessage')));

    await getRequest('test', mockOnSuccess, mockOnFail)

    expect(mockOnFail).toHaveBeenCalledTimes(1);
    expect(mockOnFail).toHaveBeenCalledWith('errorMessage');
  })
})

describe('getEmployeeMetrics function', () => {
  it('should call getRequest with the correct string', async () => {

    await getEmployeeMetrics(mockOnSuccess, mockOnFail);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/employee/hours', expect.anything());

  })
})

describe('getEmployeeMetrics function', () => {
  it('should call getRequest with the correct string', async () => {

    await getEmployeeMetrics(mockOnSuccess, mockOnFail);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/employee/hours', expect.anything());

  })
})

describe('getAllEmployeeMetrics function', () => {
  it('should call getRequest with the correct string', async () => {

    await getAllEmployeeMetrics(mockOnSuccess, mockOnFail);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/employee/hours/all', expect.anything());

  })
})

describe('getAllEmployeeDetails function', () => {
  it('should call getRequest with the correct string', async () => {

    await getEmployeeDetails(mockOnSuccess, mockOnFail);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/employee', expect.anything());

  })
})

