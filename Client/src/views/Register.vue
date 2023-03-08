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
import { userRegister } from "@/hooks/user";
import { useRouter } from "vue-router";
import errorHandler from "@/config/errorHandler";

const router = useRouter()
const { username, password, rePassword, submitUserInfo, comparePassword, checkUserInfo } = userRegister()

const submitRegister = async () => {

  if (!checkUserInfo(username, 6)) {
    alert('用户名长度不小于6位')
    return
  }
  if (!checkUserInfo(password, 6)) {
    alert('密码长度不小于6位')
    return
  }
  if (!comparePassword()) {
    alert('两次密码不一致')
  }

  try {
    const { err_code } = await submitUserInfo()
    if (err_code) {
      alert(errorHandler[err_code])
    }

    await router.push('/login')
  } catch (e) {
    alert('注册失败')
  }
}
</script>
