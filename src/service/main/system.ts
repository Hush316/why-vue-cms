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

// 针对页面的网络请求,增删改查
export function getPageListData(pageName: string, queryInfo: any) {
  return zjRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo,
  })
}

export function deletePageUserById(pageName: string, id: number) {
  return zjRequest.delete({
    url: `/${pageName}/${id}`,
  })
}

// 创建用户
export function createPageUser(pageName: string, pageInfo: any) {
  return zjRequest.post({
    url: `/${pageName}`,
    data: pageInfo,
  })
}

// 编辑用户
export function editPageUser(pageName: string, id: number, pageInfo: any) {
  return zjRequest.patch({
    url: `/${pageName}/${id}`,
    data: pageInfo,
  })
}
