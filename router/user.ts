import { Router } from "express";
import bodyParser from 'body-parser'
import { checkAuth } from "../middlewares/user";
import { getProfile, login, register } from "../controllers/User";

const router = Router()
// 解析post
const jsonParser = bodyParser.json()

router.get('/test', function (req, res, next) {
    console.log(1)
})

// api
// 请求register,使用jsonParser解析json数据，进入下一个中间件
router.post('/api/user/register', jsonParser, register)
router.post('/api/user/login', jsonParser, login)
router.post('/api/user/profile', jsonParser, checkAuth, getProfile)

export default router
