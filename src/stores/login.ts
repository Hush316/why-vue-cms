import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { accountLogin } from '@/service/login'
import type { AccountType } from '@/types/login'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    name: '',
  }),
  actions: {
    async loginAccountAction(account: AccountType) {
      const loginRes = await accountLogin(account)
      this.id = loginRes.data.id
      this.token = loginRes.data.token
      this.name = loginRes.data.name
      localCache.setCache(LOGIN_TOKEN, this.token)
      router.push({ path: '/main' })
    },
  },
})

export default useLoginStore
