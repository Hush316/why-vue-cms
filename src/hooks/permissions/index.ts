import useLoginStore from '@/stores/login'

const loginStore = useLoginStore()

// 获取是否有对应的增删改查的权限
const { permissions } = loginStore

export default function usePermission(type: string) {
  const isCreate = permissions.find((item) => item.includes(`${type}:create`))
  const isDelete = permissions.find((item) => item.includes(`${type}:delete`))
  const isUpdate = permissions.find((item) => item.includes(`${type}:update`))
  const isQuery = permissions.find((item) => item.includes(`${type}:query`))
  return {
    isCreate,
    isDelete,
    isUpdate,
    isQuery,
  }
}
