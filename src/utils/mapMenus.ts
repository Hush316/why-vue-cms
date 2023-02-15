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

export let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]) {
  // 1.加载本地路由
  const localRoutes = loadLocalRoutes()
  // 2.根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) {
        // 给route的顶层菜单增加重定向功能(但是只需要添加一次即可)
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }
        // 将二级菜单对应的路由增加到route中
        routes.push(route)
      }

      //记录第一个被匹配到的菜单
      if (!firstMenu && route) firstMenu = submenu
    }
  }
  return routes
}

/**
 *根据路径匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu
      }
    }
  }
}

interface BreadCrumbs {
  name: string
  path: string
}

// 获取当前页面面包屑
export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
  const breadCrumbs: BreadCrumbs[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        breadCrumbs.push({ name: menu.name, path: menu.url })
        breadCrumbs.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breadCrumbs
}

/**
 * 从菜单映射到按钮的权限
 * @param menuList 菜单的列表
 * @returns 权限的数组(字符串数组)
 */
export function mapMenuListToPermissions(menuList: any[]) {
  const permissions: string[] = []

  function recurseGetPermission(menus: any[]) {
    for (const item of menus) {
      if (item.type === 3) {
        permissions.push(item.permission)
      } else {
        recurseGetPermission(item.children ?? [])
      }
    }
  }

  recurseGetPermission(menuList)
  return permissions
}

// 角色权限映射到id的列表
export function mapMenuListToIds(menuList: any[]) {
  const ids: number[] = []

  function recurseGetId(menus: any[]) {
    for (const item of menus) {
      if (item.children) {
        recurseGetId(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }

  recurseGetId(menuList)
  return ids
}
