import NHRequest from './request'

import { BASE_URL } from './request/config'
import localStore from '@/utils/localStore'

const NhRequest = new NHRequest({
  baseURL: BASE_URL,
  interceptors: {
    requestAxiosInterceptorSuccess: (config) => {
      const token = localStore.getLocalStore('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    responseAxiosInterceptorSuccess: (res) => {
      return res
    }
  }
})

export default NhRequest
