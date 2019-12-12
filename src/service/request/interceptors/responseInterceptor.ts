import { AxiosResponse } from 'axios';

type ResponseInterceptor = (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;

// todo: 在响应之前做些什么 比如checkStatus
const responseInterceptor: ResponseInterceptor = response => {
  console.group(`${response.config.url}的请求结果`);
  console.log(response.data);
  console.groupEnd();
  // status不为0时为未返回正确结果
  if (response.data.status !== 0) {
    return Promise.reject(response.data);
  }
  return response.data && response.data.data;
};

export default responseInterceptor;
