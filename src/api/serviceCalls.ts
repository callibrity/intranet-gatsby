import axios from 'axios';

// eslint-disable-next-line
export const getEmployeeMetrics = async (onSuccess, onError) => {
  await axios
    .get('/api/employee/hours')
    .then((res) => {
      onSuccess(res.data);
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
      console.log(JSON.stringify(res.data, null, 2), ' response data from successful get employee api call')
      onSuccess(res.data.role);
    })
    .catch((err) => {
      onError(err.message);
    });
};
