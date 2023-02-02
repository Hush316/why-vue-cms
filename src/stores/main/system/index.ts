import { defineStore } from 'pinia'
import { createUser, deleteUserById, getUserList } from '@/service/main/system'
import type { ISystemState } from '@/stores/main/system/type'
import { editUser } from '../../../service/main/system'
import { ElMessage } from 'element-plus'

const userSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,
  }),
  actions: {
    async getUsersListAction(queryInfo: any) {
      const usersListRes = await getUserList(queryInfo)
      const { list, totalCount } = usersListRes.data
      this.usersList = list
      this.usersTotalCount = totalCount
    },

    async deleteUserByIdAction(id: string) {
      const deleteRes = await deleteUserById(id)
      ElMessage.success(deleteRes.data)
      this.getUsersListAction({ offset: 0, size: 10 })
    },

    async createUserAction(userInfo: any) {
      const createRes = await createUser(userInfo)
      ElMessage.success(createRes.data)
      this.getUsersListAction({ offset: 0, size: 10 })
    },
    async editUserAction(id: number, userInfo: any) {
      const editRes = await editUser(id, userInfo)
      ElMessage.success(editRes.data)
      this.getUsersListAction({ offset: 0, size: 10 })
    },
  },
})

export default userSystemStore
