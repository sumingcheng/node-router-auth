<template>
  <div>
    <h1>注册</h1>
    <p>
      <input
          type="text"
          placeholder="用户名"
          v-model="username"
      >
    </p>
    <p>
      <input
          type="text"
          placeholder="密码"
          v-model="password"
      >
    </p>
    <p>
      <input
          type="text"
          placeholder="确认密码"
          v-model="rePassword"
      >
    </p>
    <router-link to="/login">返回登录页</router-link>
    <button @click="submitRegister">注册</button>
  </div>
</template>
<script lang="ts" setup>
const submitRegister = () => {


}
</script>
