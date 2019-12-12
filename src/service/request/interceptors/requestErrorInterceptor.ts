type RequestErrorInterceptor = (error: any) => any;
// todo: 对请求错误做些什么
const requestErrorInterceptor: RequestErrorInterceptor = error => {
  console.log('请求失败');
  return error;
};

export default requestErrorInterceptor;
