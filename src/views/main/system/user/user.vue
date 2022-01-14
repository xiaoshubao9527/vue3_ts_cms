<template>
  <div class="user">
    <page-search
      :nhFormConfig="nhFormConfig"
      @handleReset="handleReset"
      @handleSubmit="handleSubmit"
    />
    <page-content
      propName="users"
      ref="pageContentRef"
      :nhTableConfig="nhTableConfig"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { nhFormConfig } from './config/search.config'
import { nhTableConfig } from './config/content.config'
import usePageSearch from '@/hooks/use-page-search'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const { pageContentRef, handleReset, handleSubmit } = usePageSearch()

    return {
      nhFormConfig,
      nhTableConfig,
      pageContentRef,
      handleReset,
      handleSubmit
    }
  }
})
</script>

<style scoped></style>
