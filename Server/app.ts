import express from 'express'
import userRouter from "./router/user";

const app = express()

// 允许跨域
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'content-type, Origin, Authorization');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})

app.use(userRouter)


app.listen(8000, () => {
    console.log('服务运行在：http://localhost:8000')
})
