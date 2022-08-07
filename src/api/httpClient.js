import axios from 'axios';
import { API_BASE_URL } from '../constants/config';

export const httpClient = axios.create({
  baseUrl: API_BASE_URL,
  timeout: 8000,

});
