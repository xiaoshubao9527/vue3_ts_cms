<template>
  <div class="nav-header">
    <el-icon :size="30" @click="handleClickCollapseBtn"><expand /></el-icon>
    <HbBreadcrumb :breadcrumbs="breadcrumbs" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'

import { mapPathToBreadcrumb } from '@/utils/map-menu'

import { Expand } from '@element-plus/icons-vue'
import HbBreadcrumb from '@/base-ui/breadcrumb'
import { useRoute } from 'vue-router'
export default defineComponent({
  emits: ['handleCollapse'],
  components: {
    Expand,
    HbBreadcrumb
  },
  setup(props, { emit }) {
    const store = useStore()
    const route = useRoute()

    const isCollapse = ref(false)

    // const userMenus = store.state.login.userMenus
    // const breadcrumbs = mapPathToBreadcrumb(route.path, userMenus) ?? []

    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const breadcrumbs = mapPathToBreadcrumb(route.path, userMenus) ?? []
      return breadcrumbs
    })

    const handleClickCollapseBtn = () => {
      isCollapse.value = !isCollapse.value
      emit('handleCollapse', isCollapse.value)
    }
    return {
      breadcrumbs,
      handleClickCollapseBtn
    }
  }
})
</script>

<style lang="less">
.nav-header {
  display: flex;
  height: 100%;
  align-items: center;
  .el-icon {
    font-size: 26px;
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>
