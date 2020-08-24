import axios from 'axios';

// eslint-disable-next-line
export const getEmployeeMetrics = async (onSuccess, onError) => {
  await axios
    .get('http://localhost:5000/Employee/hours')
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((err) => {
      onError(err.message);
    });
};

export const getEmployeeDetails = async (onSuccess, onError) => {
  await axios
    .get('http://localhost:5000/Employee', {
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

export const getAllEmployeeMetrics = async (onSuccess, onError) => {
  await axios
    .get('http://localhost:5000/Employee/hours/all', {
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
