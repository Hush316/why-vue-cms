import zjRequest from '@/service'

//
export function getUserList() {
  return zjRequest.post({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10,
    },
  })
}
