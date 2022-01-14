import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login'
import system from './main/system/system'

import { IRootState, StoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      password: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<StoreType> {
  return useVuexStore()
}

export default store
