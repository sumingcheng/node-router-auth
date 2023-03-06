import { Router } from "express";
import bodyParser from 'body-parser';
import { checkAuth } from "../middlewares/user";
import { getProfile, getUserList, login, register } from "../controllers/User";

const router = Router()
// 解析post
const jsonParser = bodyParser.json();

// api
// 请求register,使用jsonParser解析json数据，进入下一个中间件
router.post('/api/user/register', jsonParser, register)
router.post('/api/user/login', jsonParser, login)
router.post('/api/user/profile', jsonParser, checkAuth, getProfile)
router.get('/api/user/getUserList', getUserList)
export default router
