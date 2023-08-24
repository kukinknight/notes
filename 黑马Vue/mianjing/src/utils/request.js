import axios from 'axios'
import { Toast } from 'vant'

const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net',
  timeout: 5000 // 超时时间，超过5秒，则取消
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('mobile-token')
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    //如果服务器有返回的结果，那么error.response.xxxv 才存在
    if (error.response) {
      Toast(error.response.data.message)
    }
    return Promise.reject(error)
  }
)

export default request
