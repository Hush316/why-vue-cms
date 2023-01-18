import { accountLogin } from '@/service/login'
import type { AccountType } from '@/types/login'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const TOKEN_NAME = 'CMS_TOKEN'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(TOKEN_NAME) ?? '',
    name: '',
  }),
  actions: {
    async loginAccountAction(account: AccountType) {
      const loginRes = await accountLogin(account)
      this.id = loginRes.data.id
      this.token = loginRes.data.token
      this.name = loginRes.data.name
      localCache.setCache(TOKEN_NAME, this.token)
      router.push({ path: 'main' })
    },
  },
})

export default useLoginStore
