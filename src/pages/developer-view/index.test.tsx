import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Index from './index';
import axios from 'axios';
import { mockEmployeeMetricsProps } from '@globals/testConstants';
import { billableTitle } from '@globals/constants';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockImplementation(() => Promise.resolve({ data: 7 }));

afterEach(() => {
  jest.clearAllMocks();
})

describe('Developer view component', () => {
  it('should send an axios request', async () => {
    render(<Index />);

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
  });

  it('should not render by default', async () => {
    render(<Index />);

    expect(screen.queryByText(billableTitle)).toBeNull();
    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
  });

  it('should not render without employeeMetrics', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: null }));
    render(<Index />);

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
    expect(screen.queryByText(billableTitle)).toBeNull();
  });

  it('should render with employeeMetrics', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mockEmployeeMetricsProps }));
    render(<Index />);

    await waitFor(() => expect(screen.getByText(billableTitle)).toBeInstanceOf(HTMLElement));
  });
});
