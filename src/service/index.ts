import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import ZJRequest from './request'

const zjRequest = new ZJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      // 给请求拦截器添加token
      const token = localCache.getCache(LOGIN_TOKEN)
      if (typeof config.headers?.set === 'function' && token) {
        config.headers.set('Authorization', `Bearer ${token}`)
      }

      return config
    },
    requestFailureFn: (err) => {
      return err
    },
    responseSuccessFn: (res) => {
      return res
    },
    responseFailureFn: (err) => {
      return err
    },
  },
})

export default zjRequest
