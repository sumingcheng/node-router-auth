<template>
  <div class="home">
    <h2>
      <el-image style="width: 24px; height: 24px" :src="login"/>
      用户注册
    </h2>
    <div class="main">
      <h1>Welcome To Register</h1>
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
      <div>
        <div class="title">确认密码</div>
        <el-input
            size="large"
            placeholder="确认密码"
            v-model="rePassword"
        />
      </div>
    </div>
    <div class="footer">
      <div class="fl_bt">
        <router-link to="/login" class="link">已注册，返回登录页</router-link>
      </div>
      <div class="btn">
        <el-button @click="submitRegister" size="large" class="btnStyle">注册</el-button>
      </div>
    </div>
  </div>
  <div>
  </div>
</template>
<script lang="ts" setup>
import login from './../assets/logo.png'
import { userRegister } from "@/hooks/user";
import { useRouter } from "vue-router";
import errorHandler from "@/config/errorHandler";
import { ElMessage } from "element-plus";

const router = useRouter()
const { username, password, rePassword, submitUserInfo, comparePassword, checkUserInfo } = userRegister()

const submitRegister = async () => {

  if (!checkUserInfo(username, 6)) {
    ElMessage({ message: `用户名长度不小于6位`, type: 'warning', })
    return
  }
  if (!checkUserInfo(password, 6)) {
    ElMessage({ message: `密码长度不小于6位`, type: 'warning', })
    return
  }
  if (!comparePassword()) {
    ElMessage({ message: `两次密码不一致`, type: 'warning', })
  }

  try {
    const { err_code, data }: any = await submitUserInfo()
    if (err_code) {
      ElMessage({ message: errorHandler[err_code], type: 'warning', })
    }

    ElMessage({
      message: `恭喜${ data.username }注册成功`,
      type: 'success',
    })
    await router.push('/login')
  } catch (e) {
    ElMessage({ message: '注册失败', type: 'warning', })
  }
}
</script>
<style scoped lang="scss">
@import "../assets/login";
</style>
