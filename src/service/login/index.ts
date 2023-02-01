import type { AccountType } from '@/types/login'
import zjRequest from '@/service'

// 账号登录
export function accountLogin(account: AccountType) {
  return zjRequest.post({
    url: '/login',
    data: account,
  })
}

// 获取用户信息
export function getUserInfoById(id: number) {
  return zjRequest.get({
    url: `/users/${id}`,
  })
}

// 获取用户权限
export function getUserMenusByRoleId(id: number) {
  return zjRequest.get({
    url: `/role/${id}/menu`,
  })
}
