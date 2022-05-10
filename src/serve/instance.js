import axios from 'axios'
import store from '../store'
import { message } from 'ant-design-vue'
// 创建 axios 实例
const instance = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 60 * 1000, // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    if (error.response.status === 500 || error.response.status === 404) {
      if (document.getElementsByClassName('ant-message-error').length === 0) {
        message.error({
          content: error.response.status === 500 ? '服务器连接失败' : '登录超时，请重新登录',
        })
      }
      store.dispatch('Logout').then(() => {})
      return
    }
  }
  return Promise.reject(error)
}
// request interceptor
instance.interceptors.request.use((config) => {
  return config
}, errorHandler)

// response interceptor
instance.interceptors.response.use((response) => {
  if (response && response.headers.resptype == 1) {
    {
      let T = decodeURIComponent(base64decode(g(response.data)))
      if (T && typeof T === 'string') {
        response.data = JSON.parse(T)
        if (response.data && typeof response.data.result === 'string') {
          response.data.result = JSON.parse(response.data.result)
        }
      }
    }
  } else {
    if (response.data && typeof response.data.result === 'string') {
      response.data.result = JSON.parse(response.data.result)
    }
  }
  //这里存在一种异常, status为200,data是一个空串
  if (response.status == 200) {
    if (!response.data) {
      // console.log('error', '响应成功,res.data为空串')
      return {
        error: 'res.data error',
        msg: '响应成功,res.data为空串',
      }
    }
  }
  return response.data
}, errorHandler)

export { instance as axios }

// export { installer as VueAxios, instance as axios }
