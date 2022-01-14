import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface HBAxiosRequestInterceptorsConfig<T = AxiosResponse> {
  requestAxiosInterceptorSuccess?: (
    config: AxiosRequestConfig
  ) => AxiosRequestConfig
  requestAxiosInterceptorCache?: (err: any) => any
  responseAxiosInterceptorSuccess?: (config: T) => T
  responseAxiosInterceptorCache?: (err: any) => any
}

interface HBAxiosRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HBAxiosRequestInterceptorsConfig<T>
  showLoading?: boolean
}

export { HBAxiosRequestConfig }
