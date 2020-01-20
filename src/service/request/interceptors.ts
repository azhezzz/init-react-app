import { AxiosRequestConfig,AxiosResponse } from 'axios';

type RequestInterceptor = (
  value: AxiosRequestConfig
) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
export const requestInterceptor: RequestInterceptor = (config) => {
  // do something before request
  return config;
};

type RequestErrorInterceptor = (error: any) => any;
export const requestErrorInterceptor: RequestErrorInterceptor = (error) => {
  // do something if request error
  return error;
};


type ResponseInterceptor = (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
export const responseInterceptor: ResponseInterceptor = (response) => {
  // do something before response
  return response.data;
};

type ResponseErrorInterceptor = (error: any) => any;
export const responseErrorInterceptor: ResponseErrorInterceptor = (error) => {
  if (error.response && error.response.data) {
    const errMsg = error.response.data.msg || error.response.data.message || error.message;
    const errStatus = error.response.data.status || '';
    console.log(errMsg,errStatus);
  }
  // do something if response error
  return Promise.reject(error);
};


