import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { accountLogin } from '@/service/login'
import {
  getUserInfoById,
  getUserMenusByRoleId,
} from '@/service/login/index'
import type { AccountType } from '@/types/login'
import { localCache } from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/mapMenus'
import { defineStore } from 'pinia'

interface LoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): LoginState => ({
    token: '',
    userInfo: {},
    userMenus: [],
  }),
  actions: {
    async loginAccountAction(account: AccountType) {
      const loginRes = await accountLogin(account)

      // 保存token到本地
      this.token = loginRes.data.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 获取用户的详细信息
      const id = loginRes.data.id
      const userInfoRes = await getUserInfoById(id)
      const userInfo = userInfoRes.data
      this.userInfo = userInfo
      localCache.setCache('userInfo', userInfo)
      // 根据用户信息查询角色权限
      const userMenusRes = await getUserMenusByRoleId(id)
      const userMenus = userMenusRes.data
      this.userMenus = userMenus
      localCache.setCache('userMenus', userMenus)

      //动态添加路由
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('Main', route)
      })

      // 跳转到主页
      router.push({ path: '/main' })
    },
    loadLocalCacheAction() {
      // 1.用户进行刷新默认加载数据
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        // 动态添加路由
        const routes = mapMenusToRoutes(userMenus)
        routes.forEach((route) => {
          router.addRoute('Main', route)
        })
      }
    },
  },
})

export default useLoginStore
