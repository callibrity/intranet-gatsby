import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Index from './index';
import axios from 'axios';
import { navigate } from 'gatsby';
import { mockEmployeeMetricsProps, mockContextValue } from '@globals/testConstants';
import { billableTitle, errorRoute, notFoundRoute } from '@globals/constants';
import { UserContext } from '@globals/contexts';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockImplementation(() => Promise.resolve({ data: 7 }));

afterEach(() => {
  jest.clearAllMocks();
})

function renderPage() {
  mockContextValue.username = "Test User";
  render(
    <UserContext.Provider value={mockContextValue}>
      <Index />
    </UserContext.Provider>
  );
}

describe('Developer view component', () => {
  it('should send an axios request', async () => {
    renderPage();

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
  });

  it('should not render by default', async () => {
    renderPage();

    expect(screen.queryByText(billableTitle)).toBeNull();
    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
  });

  it('should not render without employeeMetrics', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: null }));
    renderPage();

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
    expect(screen.queryByText(billableTitle)).toBeNull();
  });

  it('should redirect to 404 error page when url path does not exist', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject({ response: { status: 404 } }));
    renderPage();

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(notFoundRoute);
  });

  it('should redirect to "something went wrong" error page when an error is thrown', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject({ response: { status: 502 } }));
    renderPage();

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(errorRoute);
  });

  it('should render with employeeMetrics', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mockEmployeeMetricsProps }));
    renderPage();
    let header = screen.getByRole('heading', { name: /welcome*/i });

    expect(header).toBeTruthy;
    await waitFor(() => expect(screen.getByText(billableTitle)).toBeInstanceOf(HTMLElement));
  });
});
