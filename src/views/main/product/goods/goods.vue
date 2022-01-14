<template>
  <div class="goods">
    <page-content
      :nhTableConfig="nhTableConfig"
      propName="goods"
      :extraSlots="['image', 'oldPrice']"
    >
      <template #image="scoped">
        <el-image
          style="width: 60px; height: 80px"
          :src="scoped.row.imgUrl"
          :preview-src-list="[scoped.row.imgUrl]"
          :initial-index="0"
        >
        </el-image>
      </template>
      <template #oldPrice="scoped">
        {{ `¥${scoped.row.oldPrice}` }}
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { nhTableConfig } from './config/content.config'

import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    return {
      nhTableConfig
    }
  }
})
</script>

<style scoped></style>
