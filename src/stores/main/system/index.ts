import { defineStore } from 'pinia'
import {
  createPageUser,
  createUser,
  deletePageUserById,
  deleteUserById,
  editPageUser,
  getPageListData,
  getUserList,
} from '@/service/main/system'
import type { ISystemState } from '@/stores/main/system/type'
import { editUser } from '../../../service/main/system'
import { ElMessage } from 'element-plus'

const userSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,
    pageList: [],
    pageTotalCount: 0,
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

    // 针对页面数据的增删改查
    async getPageListAction(pageName: string, queryInfo: any) {
      const getRes = await getPageListData(pageName, queryInfo)
      const { totalCount, list } = getRes.data
      console.log(totalCount, list)
      this.pageList = list
      this.pageTotalCount = totalCount
    },
    async deletePageUserByIdAction(pageName: string, id: number) {
      const deleteRes = await deletePageUserById(pageName, id)
      this.getPageListAction(pageName, { offset: 0, size: 10 })
    },
    async createPageUserAcion(pageName: string, pageInfo: any) {
      const createRes = await createPageUser(pageName, pageInfo)
      console.log(createRes)
      this.getPageListAction(pageName, { offset: 0, size: 10 })
    },
    async editPageUserAcion(pageName: string, id: number, pageInfo: any) {
      const editRes = await editPageUser(pageName, id, pageInfo)
      console.log(editRes)
      this.getPageListAction(pageName, { offset: 0, size: 10 })
    },
  },
})

export default userSystemStore
