import axios from 'axios';

export const baseURL = process.env.REACT_APP_API_URL;

export const setJwt = (token) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(token);
  }
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeJwt = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const setBasePath = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
};
