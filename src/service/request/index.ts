import axios from 'axios';
import { requestInterceptor,requestErrorInterceptor,responseInterceptor,responseErrorInterceptor } from './interceptors';

const request = axios.create({timeout: 30000});

request.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
request.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default request;
