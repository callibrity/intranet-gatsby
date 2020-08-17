import axios from 'axios';
import { getEmployeeResource } from '@api/endpoints';

// eslint-disable-next-line
export const getEmployeeMetrics = async (onSuccess, onError) => {
  await axios
    .get('api/employee/hours')
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((err) => {
      onError(err.message);
    });
};

export const getEmployeeDetails = async (onSuccess, onError) => {
  await axios
    .get('api/employee', {
      headers: {
        Authorization: `${axios.defaults.headers.common.Authorization}`,
      },
    })
    .then((res) => {
      onSuccess(res.data.role);
    })
    .catch((err) => {
      onError(err.message);
    });
};
