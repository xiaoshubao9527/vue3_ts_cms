<template>
  <div class="main">
    <el-menu
      :collapse-transition="false"
      :collapse="isCollapse"
      background-color="#001529"
      text-color="rgba(255, 255, 255, 0.65)"
      active-text-color="white"
      :default-active="findMenu.id + ''"
    >
      <template v-for="route in userMenus" :key="route.id">
        <!-- 二级路由 -->
        <template v-if="route.type === 1">
          <el-sub-menu :index="route.id + ''">
            <template #title>
              <el-icon>
                <component :is="iconMapToMenu(route.icon)" />
              </el-icon>
              <span>{{ route.name }}</span>
            </template>
            <template v-for="subroute in route.children" :key="subroute.id">
              <el-menu-item
                @click="router.push(subroute.url)"
                :index="subroute.id + ''"
                >{{ subroute.name }}</el-menu-item
              >
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级路由 -->
        <template v-else>
          <el-menu-item @click="router.push(route.url)" :index="route.id + ''">
            <el-icon>
              <component :is="iconMapToMenu(route.icon)" />
            </el-icon>
            <span>{{ route.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'

import { mapPathToMenu, defaultMenu } from '@/utils/map-menu'

import { Monitor, Setting, Goods, ChatLineRound } from '@element-plus/icons-vue'

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Monitor,
    Setting,
    Goods,
    ChatLineRound
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()

    const iconMapToMenu = computed(() => {
      return (iconPath: string) =>
        iconPath ? iconPath.split('-').slice(2).join('-') : ''
    })
    // 默认进入第一个二级菜单路由
    let findMenu = ref()
    if (route.path === '/main' && defaultMenu.url) {
      router.push(defaultMenu.url)
    }
    // 默认左边显示菜单
    const userMenus = store.state.login.userMenus
    findMenu.value = mapPathToMenu(route.path, userMenus) ?? defaultMenu
    return {
      router,
      iconMapToMenu,
      userMenus,
      findMenu
    }
  }
})
</script>

<style lang="less" scoped>
/deep/ .el-menu-item.is-active {
  background-color: #1890ff;
}
.el-menu {
  border: none !important;
}
</style>
