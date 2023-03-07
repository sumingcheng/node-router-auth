import { Router } from "express";
import bodyParser from 'body-parser';
import { checkAuth, checkBody } from "../middlewares/user";
import { getProfile, getUserList, login, register } from "../controllers/User";

const router = Router()
// 解析post
const jsonParser = bodyParser.json();

// api
// 请求register,使用jsonParser解析json数据，进入下一个中间件
router.get('/api/user/getUserList', getUserList)
// post
router.post('/api/user/register', jsonParser, checkBody, register)
router.post('/api/user/login', jsonParser, checkBody, login)
router.post('/api/user/profile', jsonParser, checkAuth, getProfile)
export default router
