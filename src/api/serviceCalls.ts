import axios from 'axios';
import { navigate } from 'gatsby';
import {
  employeeMetricsString, employeeDetailsString, allEmployeeMetricsString, errorRoute, notFoundRoute,
} from '@globals/constants';

export const getRequest = async (requestString: string, onSuccess: Function) => {
  await axios
    .get(requestString, { headers: { Authorization: `${axios.defaults.headers.common.Authorization}` } })
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((err) => {
      if (err.response.status === 404) {
        navigate(notFoundRoute);
      } else {
        navigate(errorRoute);
      }
    });
};

export const getEmployeeMetrics = async (onSuccess: Function) => getRequest(employeeMetricsString, onSuccess);

export const getEmployeeDetails = async (onSuccess: Function) => getRequest(employeeDetailsString, onSuccess);

export const getAllEmployeeMetrics = async (onSuccess: Function) => getRequest(allEmployeeMetricsString, onSuccess);

export const getEmployee = (endpoint) => {
  console.log('axios default headers ', axios.defaults.headers.common.Authorization);
  const url = endpoint.url
  return axios.request({
    method: 'GET',
    baseURL: url,
    url: '/employee',
    headers: { Authorization: `${axios.defaults.headers.common.Authorization}` },
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response.status === 404) {
        navigate(notFoundRoute);
      } else {
        navigate(errorRoute);
      }
    });
};
