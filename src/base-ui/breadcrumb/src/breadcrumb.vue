<template>
  <el-breadcrumb>
    <template v-for="item in breadcrumbs" :key="item.name">
      <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Ibreadcrumb } from './types/index'

export default defineComponent({
  name: 'category',
  props: {
    breadcrumbs: {
      type: Array as PropType<Ibreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
