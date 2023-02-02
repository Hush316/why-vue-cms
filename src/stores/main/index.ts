import { defineStore } from 'pinia'
import { getEntireDepartments, getEntireRoles } from '@/service/main'

interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: [],
  }),
  actions: {
    async fetchEntireDataAction() {
      const rolesRes = await getEntireRoles()
      const departmentRes = await getEntireDepartments()
      this.entireRoles = rolesRes.data.list
      this.entireDepartments = departmentRes.data.list
    },
  },
})

export default useMainStore
