import { RouteRecordRaw } from 'vue-router'

/**
 * @description: 动态匹配路由
 * @param  any[]
 * @return RouteRecordRaw[]
 */

let defaultMenu: any = null
export const mapRoutesToMenu = (userMenu: any[]) => {
  const routes: RouteRecordRaw[] = []
  // 读取所有的路由
  const allRouters: RouteRecordRaw[] = []
  const webpackContext = require.context('../router/main', true, /\.ts$/)
  webpackContext.keys().forEach((key) => {
    const route = require('../router/main' + key.slice(1))
    allRouters.push(route.default)
  })
  // 动态匹配注册路由
  const _recurseGetRoute = (menus: any[]) => {
    menus.forEach((menu) => {
      const findMenu = allRouters.find((router) => router.path === menu.url)
      if (findMenu) {
        routes.push(findMenu)
      } else {
        if (!defaultMenu) {
          defaultMenu = menu.children ? menu.children[0] : null
        }
        _recurseGetRoute(menu.children ?? [])
      }
    })
  }
  _recurseGetRoute(userMenu)

  return routes
}
/**
 * @description:  根据路由返回匹配到的路由对象
 * @param path: string
 * @return id: number
 */

export const mapPathToMenu = (
  path: string,
  menus: any[],
  breadcrumb?: any[]
): any => {
  for (const menu of menus) {
    if (menu.url === path) {
      return menu
    } else {
      const fildMenu = mapPathToMenu(path, menu.children ?? [])
      if (fildMenu) {
        if (breadcrumb) {
          breadcrumb.push(menu, fildMenu)
        }
        return fildMenu
      }
    }
  }
}

// 获取面包屑
export const mapPathToBreadcrumb = (path: string, menus: any[]) => {
  const breadcrumb: any[] = []
  mapPathToMenu(path, menus, breadcrumb)
  return breadcrumb
}

// 获取新增，删除，修改的按钮权限
export const mapMenuToPermissions = (userMenu: any[]) => {
  const permissions: any[] = []

  const __recurseGetPermissions = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        __recurseGetPermissions(menu.children ?? [])
      } else {
        // 获取type等于3的
        permissions.push(menu.permission)
      }
    }
  }
  __recurseGetPermissions(userMenu)

  return permissions
}

export { defaultMenu }
