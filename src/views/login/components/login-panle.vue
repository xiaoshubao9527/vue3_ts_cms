<template>
  <div class="login-panle-wrapper">
    <!-- 顶部表单 -->
    <el-tabs
      model-value="accountTab"
      @tab-click="tabClick"
      type="border-card"
      stretch
    >
      <el-tab-pane name="accountTab" label="账号登录">
        <LoginAccount ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane name="phoneTab" label="手机登陆">
        <LoginPhone ref="loginPhoneRef" />
      </el-tab-pane>
    </el-tabs>
    <!-- 底部密码管理 提交按钮 -->
    <div>
      <div class="admin-pwd-wrapper">
        <el-checkbox v-model="isRememberPwd" label="Option 1"
          >记住密码</el-checkbox
        >
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" :style="{ width: '100%' }" @click="formSubmit"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import router from '@/router'

import { ElMessage } from 'element-plus'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isRememberPwd = ref(true)
    const selectTab = ref('accountTab')
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>()

    const tabClick = (value: any) => {
      selectTab.value = value.props.name
    }

    const formSubmit = async () => {
      let result: any = false
      if (selectTab.value === 'accountTab') {
        // 账号登陆
        result = await loginAccountRef.value?.accountFormSubmit(
          isRememberPwd.value
        )
      } else {
        loginPhoneRef.value?.phoneFormSubmit()
      }
      if (result) {
        router.push('/main')
        ElMessage({
          message: '登录成功',
          type: 'success'
        })
      }
    }

    return {
      isRememberPwd,
      loginAccountRef,
      loginPhoneRef,
      tabClick,
      formSubmit
    }
  }
})
</script>

<style lang="less">
.login {
  .admin-pwd-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
