import axios from 'axios';

export const setJwt = (token : string) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(token);
  }
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeJwt = () => {
  axios.defaults.headers.common.Authorization = '';
};
