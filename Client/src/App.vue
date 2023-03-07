<template>
  <router-view/>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { Storage } from "@/libs/utils";
import { checkLoginService } from "@/services/User";
import { userStorage } from "@/hooks/user";

const router = useRouter()

router.beforeEach(async (to, from) => {
  const accessToken = Storage.get('access_token')
  const { removeUserStorage } = userStorage()

  if (accessToken) {
    const { err_code } = await checkLoginService()

    // 校验token并且判断
    if (err_code && to.name === 'home') {
      removeUserStorage()
      return {
        name: "login"
      }
    }

    // 校验没问题，但是当前页是登录或者注册，跳转到home
    if (!err_code && (to.name === 'login' || to.name === 'register')) {
      return {
        name: 'home'
      }
    }

    // 校验token发现有问题，并且在login就清除token
    if (err_code && to.name === 'login') {
      removeUserStorage()
    }

  } else {
    if (to.name !== 'login' && to.name !== 'register') {
      return {
        name: 'login'
      }
    }
  }
})
</script>
