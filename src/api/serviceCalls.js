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
