import zjRequest from '@/service'

// 获取用户列表
export function getUserList(queryInfo: any) {
  return zjRequest.post({
    url: '/users/list',
    data: queryInfo,
  })
}

// 删除用户
export function deleteUserById(id: string) {
  return zjRequest.delete({
    url: `/users/${id}`,
  })
}

// 创建用户
export function createUser(userInfo: any) {
  return zjRequest.post({
    url: '/users',
    data: userInfo,
  })
}

// 编辑用户
export function editUser(id: number, userInfo: any) {
  return zjRequest.patch({
    url: `/users/${id}`,
    data: userInfo,
  })
}
