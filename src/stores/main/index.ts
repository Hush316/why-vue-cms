import { defineStore } from 'pinia'
import {
  getEntireDepartments,
  getEntireMenus,
  getEntireRoles,
} from '@/service/main'

interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: [],
    entireMenus: [],
  }),
  actions: {
    async fetchEntireDataAction() {
      const rolesRes = await getEntireRoles()
      const departmentRes = await getEntireDepartments()
      const menusRes = await getEntireMenus()
      this.entireRoles = rolesRes.data.list
      this.entireDepartments = departmentRes.data.list
      this.entireMenus = menusRes.data.list
    },
  },
})

export default useMainStore
