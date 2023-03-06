import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config as DotEnv } from "dotenv";

DotEnv()

export async function checkAuth(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers.authorization
    if (!auth) {
        return res.status(403).json({
            err_code: 1005,
            err_msg: 'The API must table the Authorization'
        })
    }

    const rawToken = auth.split(" ")[1];
    // 解密
    try {
        const tokenData = jwt.verify(rawToken, process.env.SECRET_KEY!) as JwtPayload

        if (!tokenData) {
            res.status(403).json({
                err_code: 1006,
                err_msg: "Invalid token"
            })
        }

        req.id = tokenData.id;
        next()
    } catch (e) {
        res.status(403).json({
            err_code: 1007,
            err_msg: "Token Verify filed"
        })
    }
    next()
}
