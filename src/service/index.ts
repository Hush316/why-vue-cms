import { BASE_URL, TIME_OUT } from './config'
import ZJRequest from './request'

const zjRequest = new ZJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
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
