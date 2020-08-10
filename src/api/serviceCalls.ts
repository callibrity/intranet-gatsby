import axios from 'axios';
import { getEmployeeResource } from '@api/endpoints';

// eslint-disable-next-line
export const getEmployeeMetrics = async (onSucess, onError) => {
  await axios
    .get(`${getEmployeeResource}/hours`)
    .then((res) => {
      onSucess(res.data);
    })
    .catch((err) => {
      onError(err.message);
    });
};

export const getEmployeeDetails = async (onSuccess, onError) => {
  await axios
    .get(`${getEmployeeResource}`, {
      headers: {
        Authorization: `${axios.defaults.headers.common.Authorization}`,
      },
    })
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((err) => {
      onError(err.message);
    });
};
