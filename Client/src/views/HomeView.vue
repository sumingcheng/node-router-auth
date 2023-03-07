<template>
  <div class="home">
    <h1>Home</h1>
    <a href="javascript:;" @click="logOut">退出登录</a>
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
