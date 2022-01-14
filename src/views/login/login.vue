<template>
  <div class="login">
    <h2>后台管理系统</h2>
    <LoginPanle />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanle from './components/login-panle.vue'
export default defineComponent({
  name: 'login',
  components: {
    LoginPanle
  }
})
</script>

<style lang="less">
.login {
  width: 32vw;
  margin: 150px auto 0;
  & h2 {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
