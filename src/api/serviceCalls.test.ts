import axios from 'axios';
import { getEmployeeMetrics } from '@api/serviceCalls';

jest.mock('axios');

describe('Api Service Calls', () => {
  it('getEmployeeMetrics should call func with data on success', async () => {
    const mockOnSuccess = jest.fn();
    const mockOnFail = jest.fn();
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: 7 }));

    await getEmployeeMetrics(mockOnSuccess, mockOnFail);

    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
    expect(mockOnSuccess).toHaveBeenCalledWith(7);
  });

  it('getEmployeeMetrics should call func with error on reject', async () => {
    const mockOnSuccess = jest.fn();
    const mockOnFail = jest.fn();
    axios.get.mockImplementationOnce(() => Promise.reject(new Error('errorMessage')));

    await getEmployeeMetrics(mockOnSuccess, mockOnFail);

    expect(mockOnFail).toHaveBeenCalledTimes(1);
    expect(mockOnFail).toHaveBeenCalledWith('errorMessage');
  });
});
