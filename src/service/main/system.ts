import zjRequest from '@/service'

//
export function getUserList(queryInfo: any) {
  return zjRequest.post({
    url: '/users/list',
    data: queryInfo,
  })
}
