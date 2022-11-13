import Axios from 'axios';
import { apiEndpointUrl } from './config';

const headersAuth = {
  Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
};

const AxiosInstance = Axios.create({
  baseURL: apiEndpointUrl,
  headers: {
    ...headersAuth,
  },
});

export default AxiosInstance;
