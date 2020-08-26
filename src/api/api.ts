import axios from 'axios';

export const setJwt = (token : string) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(token);
  }
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeJwt = () => {
  axios.defaults.headers.common.Authorization = '';
};
