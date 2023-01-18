import type { AccountType } from '@/types/login'
import zjRequest from '..'

export function accountLogin(account: AccountType) {
  return zjRequest.post({
    url: '/login',
    data: account,
  })
}
