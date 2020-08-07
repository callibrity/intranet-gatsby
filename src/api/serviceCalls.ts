import axios from 'axios';

// eslint-disable-next-line
export const getEmployeeMetrics = async (onSucess, onError) => {
  await axios
    .get('/api/employee/hours')
    .then((res) => {
      onSucess(res.data);
    })
    .catch((err) => {
      onError(err.message);
    });
};
