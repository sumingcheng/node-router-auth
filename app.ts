import express from 'express'
import userRouter from "./router/user";

const app = express()
app.use(userRouter)
app.listen(8888, () => {
    console.log('ok')
})
