import { Router } from "express";
import bodyParser from 'body-parser'

const router = Router()
// 解析post
const jsonParser = bodyParser.json()

router.get('/test', function (req, res, next) {
    console.log(1)
})

export default router
