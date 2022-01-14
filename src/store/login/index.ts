import { Module } from 'vuex'

import {
  requestLoginInfo,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localStore from '@/utils/localStore'
import { mapMenuToPermissions, mapRoutesToMenu } from '@/utils/map-menu'

import { ILoginState, ILoginRequest } from './types'
import { IRootState } from '../types'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, payload: string) {
      state.token = payload
    },
    changeUserInfo(state, payload: any) {
      state.userInfo = payload
    },
    changeUserMenu(state, payload: any) {
      state.userMenus = payload
      // 动态添加路由
      const routes = mapRoutesToMenu(state.userMenus)
      routes.forEach((route) => router.addRoute('main', route))

      // 动态获取按钮权限
      const permissions = mapMenuToPermissions(state.userMenus)
      console.log(permissions)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: ILoginRequest) {
      // 请求token
      const loginInfoResult = await requestLoginInfo(payload)
      const { token, id } = loginInfoResult.data
      commit('changeToken', token)
      localStore.setLocalStore('token', token)

      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localStore.setLocalStore('userInfo', userInfo)

      // 请求菜单权限
      const userMenus = await requestUserMenusByRoleId(userInfo.role.id)
      const data = userMenus.data
      commit('changeUserMenu', data)
      localStore.setLocalStore('userMenus', data)

      return true
    },
    // 加载登录信息到vuex中
    async loadLocalLogin({ commit }) {
      const token = localStore.getLocalStore('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localStore.getLocalStore('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localStore.getLocalStore('userMenus')
      if (userMenus) {
        commit('changeUserMenu', userMenus)
      }
    }
  }
}

export default loginModule
