<template>
  <div class="login-panle-wrapper">
    <el-form
      :rules="accountFormRules"
      :model="accountForm"
      ref="accountFormRef"
    >
      <el-form-item prop="name" label="账号">
        <el-input v-model="accountForm.name"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="accountForm.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

import { accountFormRules } from '../config/login-account'

import { ElForm } from 'element-plus'
import localStore from '@/utils/localStore'

export default defineComponent({
  setup() {
    const store = useStore()
    const accountForm = reactive({
      name: localStore.getLocalStore('name'),
      password: localStore.getLocalStore('password')
    })
    const accountFormRef = ref<InstanceType<typeof ElForm>>()

    const accountFormSubmit = (isRememberPwd: boolean) => {
      let accountLoginResult = false
      return new Promise((res, rej) => {
        accountFormRef.value?.validate(async (valid) => {
          if (valid) {
            accountLoginResult = await store.dispatch(
              'login/accountLoginAction',
              accountForm
            )
            if (accountLoginResult) {
              res(accountLoginResult)
              if (isRememberPwd) {
                localStore.setLocalStore('name', accountForm.name)
                localStore.setLocalStore('password', accountForm.password)
              } else {
                localStore.deleteLocalStore('name')
                localStore.deleteLocalStore('password')
              }
            } else {
              rej(accountLoginResult)
            }
          }
        })
      })
    }

    return {
      accountForm,
      accountFormRef,
      accountFormRules,
      accountFormSubmit
    }
  }
})
</script>

<style lang="less"></style>
