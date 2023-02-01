import { defineStore } from 'pinia'
import { getUserList } from '@/service/main/system'
import type { ISystemState } from '@/stores/main/system/type'

const userSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,
  }),
  actions: {
    async getUserListAction() {
      const usersListRes = await getUserList()
      const { list, totalCount } = usersListRes.data
      this.usersList = list
      this.usersTotalCount = totalCount
    },
  },
})

export default userSystemStore
