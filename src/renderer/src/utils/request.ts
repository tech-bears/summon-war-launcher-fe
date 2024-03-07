import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
//封装一个通用的ts版本的axios请求 包括请求拦截器和响应拦截器
const instance = axios.create({
  baseURL: process.env.VITE_APP_BASE_API,
  timeout: 5000
})
//请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
//响应拦截器
instance.interceptors.response.use(
  (response) => {
    //对错误码进行处理
    const res = response.data
    if (res.code !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
export interface ResponseData<T> {
  code: number
  message: string
  data: T
}
export interface RequestConfig extends AxiosRequestConfig {
  headers?: any
}
const request = async <T = any>(config: RequestConfig): Promise<T> => {
  try {
    const { data } = await instance.request<ResponseData<T>>(config)
    // 如果接口是返回文件，则没有code
    return data?.code ? data.data : (data as any)
  } catch (err) {
    return Promise.reject(err)
  }
}
export default request
