import axios from 'axios';

export const getRequest = async (requestString: string, onSuccess: Function, onError: Function) => {
  await axios
    .get(`/api/${requestString}`, { headers: { Authorization: `${axios.defaults.headers.common.Authorization}` } })
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((err) => {
      onError(err.message);
    });
}

export const getEmployeeMetrics = async (onSuccess: Function, onError: Function) => getRequest('employee/hours', onSuccess, onError);

export const getEmployeeDetails = async (onSuccess: Function, onError: Function) => getRequest('employee', onSuccess, onError);

export const getAllEmployeeMetrics = async (onSuccess: Function, onError: Function) => getRequest('employee/hours/all', onSuccess, onError);
