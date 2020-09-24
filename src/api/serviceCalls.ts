import axios from 'axios';
import { navigate } from 'gatsby';
import { employeeMetricsString, employeeDetailsString, allEmployeeMetricsString, errorRoute, notFoundRoute } from '@globals/constants';

export const getRequest = async (requestString: string, onSuccess: Function, onError: Function) => {
  await axios
    .get(requestString, { headers: { Authorization: `${axios.defaults.headers.common.Authorization}` } })
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((err) => {
      onError(err);
      if (err.response.status === 404) {
        navigate(notFoundRoute);
      }
      else {
        navigate(errorRoute);
      }
    });
}

export const getEmployeeMetrics = async (onSuccess: Function, onError: Function) => getRequest(employeeMetricsString, onSuccess, onError);

export const getEmployeeDetails = async (onSuccess: Function, onError: Function) => getRequest(employeeDetailsString, onSuccess, onError);

export const getAllEmployeeMetrics = async (onSuccess: Function, onError: Function) => getRequest(allEmployeeMetricsString, onSuccess, onError);
