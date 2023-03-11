<template>
  <div class="home">
    <h1>欢迎访问此系统</h1>
    <el-button @click="logOut" size="large" class="btnStyle">退出登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { userStorage } from "@/hooks/user";

const router = useRouter()
const { removeUserStorage } = userStorage()

const logOut = () => {
  removeUserStorage()
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
}
</style>
