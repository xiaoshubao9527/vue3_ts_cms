<template>
  <div class="role">
    <page-search :nhFormConfig="nhFormConfig" />
    <page-content propName="role" :nhTableConfig="nhTableConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { nhFormConfig } from './config/search.config'
import { nhTableConfig } from './config/content.config'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      nhFormConfig,
      nhTableConfig
    }
  }
})
</script>

<style scoped></style>
