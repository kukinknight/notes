import request from '@/utils/request'

//下面封装各种请求

//登录的请求方法2
export const loginAPI = data => {
  return request.post('/h5/user/login', data)
}

//注册的请求方法2
export const registerAPI = data => {
  return request.post('/h5/user/register', data)
}
