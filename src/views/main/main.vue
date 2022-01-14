<template>
  <div class="main-wrapper">
    <el-container>
      <el-aside :style="{ width: isCollapse ? '80px' : '210px' }">
        <NavMenu :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <NavHeader @handleCollapse="handleCollapse" />
        </el-header>
        <el-main>
          <div class="router-view-wrapper">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavHeader from '@/components/nav-header/index'
import NavMenu from '@/components/nav-menu/index'
// :style="{ width: isCollapse ? '64px' : '210px' }"
export default defineComponent({
  name: 'nh-main',
  components: {
    NavHeader,
    NavMenu
  },
  setup() {
    const isCollapse = ref(false)
    const handleCollapse = (collapse: boolean) => {
      isCollapse.value = collapse
    }
    return {
      isCollapse,
      handleCollapse
    }
  }
})
</script>

<style lang="less" scoped>
.main-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}
.el-header {
  background-color: #fff;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #001529;
  height: 100%;
  width: 200px;
}
.router-view-wrapper {
  background-color: #fff;
  padding: 0 20px;
}
.el-main {
  color: rgba(0, 0, 0, 0.85);
  background-color: #e9eef3;
  padding: 20px 0;
  border-radius: 5px;
}
.el-aside {
  transition: width 0.1s;
}
</style>
