import { AxiosRequestConfig } from 'axios';

type RequestInterceptor = (
  value: AxiosRequestConfig
) => AxiosRequestConfig | Promise<AxiosRequestConfig>;

// todo: 在发送请求之前做些什么 比如添加token
const requestInterceptor: RequestInterceptor = config => {
  return config;
};
export default requestInterceptor;
