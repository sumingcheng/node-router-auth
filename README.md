![npm version](https://img.shields.io/badge/typescipt-1.0.0-green)
![npm version](https://img.shields.io/badge/mongoose-7.0.0-green)
![npm version](https://img.shields.io/badge/jsonwebtoken-9.0.0-green)
![npm version](https://img.shields.io/badge/express-4.18.2-green)
![npm version](https://img.shields.io/badge/bcrypt-5.1.0-green)
![npm version](https://img.shields.io/badge/vue-3.2.13-green)
![npm version](https://img.shields.io/badge/axios-1.3.4-green)
![npm version](https://img.shields.io/badge/element--plus-2.2.35-green)

# Node 实现后台 Vue3 + TS 实现客户端

# 服务端构建流程

1. 安装

```
    npm i express mongoose typescipt bcrypt jsonwebtoken dotenv
```

2. 安装类型注解，因为要使用到 TS

```
    npm i ts-node-dev @types/express @types/mongoose @types/node @types/jsonwebtoken @types/bcrypt -D
```

3. 初始化 TS 配置文件

```
    npm install -g typescript
    tsc --init
```

## 依赖说明

password：MD5( MD5(password) + salt)
salt 在每次登录验证完毕后，就动态更改
bcrypt 是加密算法工具，满足我们多种加密需求

    "bcrypt": "^5.1.0",

用来获取 process.env 的环境变量

    "dotenv": "^16.0.3",

HEADER+PAYLOAD+KEY = 生成 token
http 请求可以在 authorization : Bearer + token

    "jsonwebtoken": "^9.0.0",

数据库操作的封装库

    "mongoose": "^7.0.0",

## 客户端端构建流程

1. 创建项目 选择 Vue3 和 TS

```text
    npm install -g @vue/cli
    vue create xxx
```

2. 安装 Axios

```text
    npm i axios
```
