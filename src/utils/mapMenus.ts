import type { RouteRecordRaw } from 'vue-router'

export function loadLocalRoutes() {
  const localRoutes: RouteRecordRaw[] = []
  // 1.读取router/main中所有的ts文件
  const files: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    {
      eager: true,
    },
  )
  // 2.将加载的对象加到localRoutes
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }
  return localRoutes
}

export function mapMenusToRoutes(userMenus: any[]) {
  // 1.加载本地路由
  const localRoutes = loadLocalRoutes()
  // 2.根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find(
        (item) => item.path === submenu.url,
      )
      route && routes.push(route)
    }
  }
  return routes
}
