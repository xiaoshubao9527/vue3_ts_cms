import { createApp } from 'vue'
import router from './router'
import store, { setupStore } from './store'

import { registerApp } from './global/index'

import '@/assets/css/reset.less'
import 'normalize.css/normalize.css'

import App from './App.vue'

const app = createApp(App)
// 注册element-plus全局组件/其他
app.use(registerApp)

// 刷新本地存储到vuex的登录信息 动态添加路由必须在use(router)前面 因为use(router)已经匹配好了 在添加路由就不会再次进行匹配了
// 也不能在路由守卫里面动态添加路由 因为触发路由守卫之前他已经匹配好了
setupStore()
app.use(router)
app.use(store)

app.mount('#app')
