import { Request, Response } from "express";
import UserModel from "../moduls/User";

export interface IUserInfo {
    username: string,
    password: string,
}

export async function register(req: Request, res: Response) {
    const { username, password }: IUserInfo = req.body
    if (username.length < 6 || password.length < 6) {
        return res.status(403).json({
            err_code: 1001,
            err_msg: 'Invalid username or password length'
        })
    }
    try {
        const user = await UserModel.addUser({
            username, password
        })

        res.status(200).json({
            err_code: 0,
            err_msg: 'ok',
            data: user
        })
    } catch (e) {
        res.status(403).json({
            err_code: 1002,
            err_msg: 'The username existed in database'
        })
    }

    res.status(200).json({
        msg: 'register'
    })
}

export async function login(req: Request, res: Response) {
    res.status(200).json({
        msg: 'login'
    })
}

export async function getProfile(req: Request, res: Response) {
    res.status(200).json({
        msg: 'getProfile'
    })
}
