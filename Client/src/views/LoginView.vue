<template>
  <div class="home">
    <h1><span>LOGO</span>登录</h1>
    <div class="main">
      <h1>Welcome Back</h1>
      <h5>欢迎登录：请输入你的用户名和密码</h5>
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
        <el-switch v-model="value1" class="switch"/>
        <router-link to="/register" class="link">去注册</router-link>
      </div>
      <div class="btn">
        <el-button @click="submitLogin" size="large" class="btnStyle">登录</el-button>
      </div>
      <div class="btn">
        <el-button @click="" size="large" class="btnStyle">SSO登录</el-button>
      </div>
    </div>
    <div class="under">使用其他方式登录</div>
  </div>
</template>


<script lang="ts" setup>
import { userLogin, userStorage } from "@/hooks/user";
import errorHandler from "@/config/errorHandler";
import { useRouter } from "vue-router";
import { ref } from "vue";

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

// 表单内容
const value1 = ref(true)
</script>
<style scoped lang="scss">
.home {
  position: relative;
  margin: 100px auto 0;
  width: 700px;
  height: 800px;
  background-color: #fffcf9;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 10px;
}

.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  .title {
    text-align: left;
    margin: 30px 30px 10px;
    font-weight: bold;
    font-size: 16px;
  }

  .el-input {
    width: 400px;
    margin: 0 30px;
  }

  h5 {
    margin-top: 20px;
    color: #abaaa4
  }
}

.footer {
  padding: 0 110px;
  margin-top: 30px;

  .fl_bt {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .switch:after {
      content: "记住密码";
      margin-left: 20px;
      font-weight: bold;
    }
  }

  .link {
    color: #409eff;
  }

  .btn {
    margin-top: 30px;
  }

  .btnStyle {
    width: 100%;
    background-color: #181818;
    color: #fffcf9;
    letter-spacing: 4px;
    font-size: 16px;
  }
}

.under {
  position: absolute;
  left: 40%;
  bottom: 10%;
  font-size: 16px;
  letter-spacing: 4px;
  text-decoration: underline;
}
</style>
