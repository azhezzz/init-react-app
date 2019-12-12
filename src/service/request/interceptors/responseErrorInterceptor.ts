type ResponseErrorInterceptor = (error: any) => any;

// todo: 对请求错误做些什么 比如token过期重新请求
const responseErrorInterceptor: ResponseErrorInterceptor = error => {
  let errMsg = error.message;
  let errStatus;
  if (error.response && error.response.data) {
    errMsg = error.response.data.msg || error.response.data.message;
    errStatus = error.response.data.status || '';
    if (errStatus === 90000) {
      // TODO: 重新获取token
      // globalDispatch({ type: `${NAMESPACE.AUTH}/${ActionType.do_logout}` });
      // globalMessage('请重新登录');
    }
  }
  if (error.response && errStatus !== 90000) {
    console.log(error.response.status, errMsg);
  }
  // 如果Promise.reject 错误将继续抛出.
  // return 其他值 则表明错误已处理 不再继续抛出
  return Promise.reject(error);
};

export default responseErrorInterceptor;
