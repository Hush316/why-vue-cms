import zjRequest from '@/service'

export function getEntireRoles() {
  return zjRequest.post({
    url: '/role/list',
  })
}

export function getEntireDepartments() {
  return zjRequest.post({
    url: '/department/list',
  })
}

export function getEntireMenus() {
  return zjRequest.post({
    url: '/menu/list',
  })
}
