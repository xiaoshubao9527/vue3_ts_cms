import axios from 'axios'

import type { AxiosInstance } from 'axios'
import { HBAxiosRequestConfig } from './type'

import { ElLoading, ElNotification } from 'element-plus'
import 'element-plus/es/components/loading/style/css'
import 'element-plus/es/components/notification/style/css'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

class NHRequest {
  instance: AxiosInstance
  showLoading: boolean
  loadingInstance?: LoadingInstance
  constructor(config: HBAxiosRequestConfig) {
    // 每个实例的请求信息可能不同
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? true

    // 创建实例的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestAxiosInterceptorSuccess,
      config.interceptors?.requestAxiosInterceptorCache
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseAxiosInterceptorSuccess,
      config.interceptors?.responseAxiosInterceptorCache
    )

    // 创建全局的拦截器
    this.instance.interceptors.request.use((config) => {
      // 所有请求加loading
      if (this.showLoading) {
        this.loadingInstance = ElLoading.service({
          lock: true,
          text: '正在请求数据....',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
      return config
    })
    this.instance.interceptors.response.use(
      (res) => {
        // 取消loading
        this.loadingInstance?.close()
        return res.data
      },
      (err) => {
        ElNotification({
          title: 'Error',
          message: err.message,
          type: 'error',
          duration: 2000
        })
        this.loadingInstance?.close()
      }
    )
  }
  request<T = any>(config: HBAxiosRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求的拦截器
      if (config.interceptors?.requestAxiosInterceptorSuccess) {
        config = config.interceptors.requestAxiosInterceptorSuccess(config)
      }

      // 取消单个请求的loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      // 发起请求
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseAxiosInterceptorSuccess) {
            res = config.interceptors?.responseAxiosInterceptorSuccess(res)
          }
          // 修改下次请求有loading
          this.showLoading = true
          // 把请求的结果返回出去
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }
  get<T = any>(config: HBAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: HBAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: HBAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: HBAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default NHRequest
