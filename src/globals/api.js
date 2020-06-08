import axios from "axios";

export const baseURL = process.env.REACT_APP_API_URL;

export const calendarURL = `${process.env.REACT_APP_API_URL}/calendar`;

export const newsURL = `${process.env.REACT_APP_API_URL}/news`;

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL
});
