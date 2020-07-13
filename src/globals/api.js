import axios from "axios"

export const baseURL = process.env.REACT_APP_API_URL
export const calendarURL = `${process.env.REACT_APP_API_URL}/calendar`
export const newsURL = `${process.env.REACT_APP_API_URL}/news`

export const setJwt = token => {
  if (process.env.NODE_ENV === "development") {
    console.log(token)
  }
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export const removeJwt = () => {
  axiosInstance.defaults.headers.common["Authorization"] = ""
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export default axiosInstance
