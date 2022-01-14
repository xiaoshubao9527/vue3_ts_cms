<template>
  <div class="login-panle-wrapper">
    <el-form :rules="phoneFormRules" :model="phoneForm" ref="phoneFormRef">
      <el-form-item prop="phone" label="手机号">
        <el-input v-model="phoneForm.phone"></el-input>
      </el-form-item>
      <el-form-item prop="code" label="验证码">
        <div class="get-code-wrapper">
          <el-input v-model="phoneForm.code"></el-input>
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import { phoneFormRules } from '../config/login-phone'

import { ElForm } from 'element-plus'

export default defineComponent({
  setup() {
    const phoneFormRef = ref<InstanceType<typeof ElForm>>()
    const phoneForm = reactive({
      phone: '',
      code: ''
    })

    const phoneFormSubmit = () => {
      phoneFormRef.value?.validate((valid) => {
        if (valid) {
          console.log('手机', phoneForm)
        }
      })
    }
    return {
      phoneFormRef,
      phoneForm,
      phoneFormRules,
      phoneFormSubmit
    }
  }
})
</script>

<style lang="less">
.get-code-wrapper {
  display: flex;
  .get-btn {
    margin-left: 10px;
  }
}
</style>
