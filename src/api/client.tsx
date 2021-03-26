import axios from 'axios'
import { API_ENDPOINT } from './endpoint';


export const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true
});