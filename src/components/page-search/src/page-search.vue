<template>
  <div class="page-search">
    <nh-form v-bind="nhFormConfig" v-model="formData">
      <template #header>我是顶部的内容</template>
      <template #footer>
        <div class="form-btn">
          <el-button @click="handleClickReset">重置</el-button>
          <el-button type="primary" @click="handleClickSubmit">提交</el-button>
        </div>
      </template>
    </nh-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import NhForm from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  props: {
    nhFormConfig: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['handleReset', 'handleSubmit'],
  components: {
    NhForm
  },
  setup(props, { emit }) {
    // 1.获取表单字段
    const formOriginData: any = {}
    const formItemsData = props.nhFormConfig?.formItems ?? []
    for (const item of formItemsData) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 2.点击重置按钮
    const handleClickReset = () => {
      formData.value = formOriginData
      emit('handleReset')
    }
    // 3.点击提交按钮
    const handleClickSubmit = () => {
      emit('handleSubmit', formData.value)
    }
    return {
      formData,
      handleClickReset,
      handleClickSubmit
    }
  }
})
</script>

<style scoped>
.form-btn {
  text-align: right;
}
</style>
