<template>
  <div class="home">
    <h2>
      <el-image style="width: 20px; height: 20px" :src="login"/>
      用户登录
    </h2>
    <div class="main">
      <h1>Welcome Back</h1>
      <h5>欢迎：请输入你的用户名和密码</h5>
      <div>
        <div class="title">用户名</div>
        <el-input
            size="large"
            placeholder="用户名"
            v-model="username"
        />
      </div>
      <div>
        <div class="title">密码</div>
        <el-input
            size="large"
            placeholder="密码"
            v-model="password"
        />
      </div>
    </div>
    <div class="footer">
      <div class="fl_bt">
        <el-switch v-model="value1" class="switch" @change="rememberMe"/>
        <router-link to="/register" class="link">去注册</router-link>
      </div>
      <div class="btn">
        <el-button @click="submitLogin" size="large" class="btnStyle">登录</el-button>
      </div>
      <div class="btn">
        <el-button @click="" size="large" class="btnStyle" disabled>SSO登录</el-button>
      </div>
    </div>
    <div class="under">使用其他方式登录</div>
  </div>
</template>


<script lang="ts" setup>
import login from './../assets/logo.png'
import { rememberUser, userLogin, userStorage } from "@/hooks/user";
import errorHandler from "@/config/errorHandler";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";

const { username, password, checkUserInfo, submitUserInfo } = userLogin()
const { setUserStorage, removeUserStorage } = userStorage()
const router = useRouter()

const submitLogin = async () => {
  if (!checkUserInfo(username, 6)) {
    ElMessage({ message: '密码长度不小于6位', type: 'warning', })
    return
  }
  if (!checkUserInfo(password, 6)) {
    ElMessage({ message: '密码长度不小于6位', type: 'warning', })
    return
  }

  try {
    const { err_code, data }: any = await submitUserInfo()
    if (err_code) {
      ElMessage({ message: errorHandler[err_code], type: 'warning', })
      return
    }
    // 登录成功
    setUserStorage(data.access_token, data.level)
    ElMessage({
      message: `登录成功`,
      type: 'success',
    })
    await router.push('./')
  } catch (e) {
    ElMessage({ message: '登录失败', type: 'warning', })
  }
}

// 表单内容
const { setUser, removeUser, getUser } = rememberUser()
let value1 = ref(true)

onMounted(() => {
  const [ existence, value ]: [ boolean, string | null ] = getUser()
  value1.value = existence
  username.value = value ? value : '';
});

const rememberMe = () => {
  if (value1.value) {
    value1.value = setUser(username.value)
  } else {
    removeUser()
  }
}

</script>
<style scoped lang="scss">
@import "../assets/login";
</style>
