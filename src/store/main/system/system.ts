import { Module } from 'vuex'

import { IRootState } from '@/store/types'
import { ISystemState } from './types'
import { getPageList } from '@/service/main/system/system'

const SystemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    getDataList(state) {
      return (propName: string) => {
        // switch (propName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
        return (state as any)[`${propName}List`]
      }
    },
    getDataListCount(state) {
      return (propName: string) => {
        // switch (propName) {
        //   case 'users':
        //     return state.usersCount
        //   case 'role':
        //     return state.roleCount
        // }
        return (state as any)[`${propName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, userList) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount) {
      state.usersCount = userCount
    },
    changeRoleList(state, roleList) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount) {
      state.menuCount = menuCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const propName = payload.propName
      const result = await getPageList({
        pageUrl: propName + '/list',
        queryInfo: payload.queryInfo
      })
      const { list, totalCount } = result.data
      // switch (propName) {
      //   case 'users':
      //     commit('changeUserList', list)
      //     commit('changeUserCount', totalCount)
      //     break
      //   case 'role':
      //     commit('changeRoleList', list)
      //     commit('changeRoleCount', totalCount)
      //     break
      // }
      const newPropName = propName[0].toLocaleUpperCase() + propName.slice(1)
      commit(`change${newPropName}List`, list)
      commit(`change${newPropName}Count`, totalCount)
    }
  }
}

export default SystemModule
