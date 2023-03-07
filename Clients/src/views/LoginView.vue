<template>
  <div class="home">
    <h1>登录</h1>
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
    <router-link to="/register">去注册页</router-link>
    <button @click="submitLogin">登录</button>
  </div>
</template>

<script lang="ts" setup>
const submitLogin = () => {

}
</script>
