<template>
  <div class="menu">
    <page-content :nhTableConfig="nhTableConfig" propName="menu" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { nhTableConfig } from './config/content.config'

import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'menu',
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
