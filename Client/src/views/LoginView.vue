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
    <el-button @click="submitLogin">登录</el-button>
  </div>
</template>


<script lang="ts" setup>
import { userLogin, userStorage } from "@/hooks/user";
import errorHandler from "@/config/errorHandler";
import { useRouter } from "vue-router";

const { username, password, checkUserInfo, submitUserInfo } = userLogin()
const { setUserStorage, removeUserStorage } = userStorage()
const router = useRouter()
const submitLogin = async () => {
  if (!checkUserInfo(username, 6)) {
    alert('用户名长度不小于6位')
    return
  }
  if (!checkUserInfo(password, 6)) {
    alert('密码长度不小于6位')
    return
  }

  try {
    const { err_code, data }: any = await submitUserInfo()
    if (err_code) {
      alert(errorHandler[err_code])
      return
    }
    // 登录成功
    setUserStorage(data.access_token, data.level)

    await router.push('./')
  } catch (e) {
    alert('登录失败')
  }
}
</script>
<style scoped lang="scss">
.home {
  margin: 0 auto;
}

</style>
