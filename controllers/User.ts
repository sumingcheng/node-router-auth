import { Request, Response } from "express";
import UserModel from "../moduls/User";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { config as DotEvn } from "dotenv";

DotEvn()
const { SECRET_KEY } = process.env

export interface IUserInfo {
    username: string,
    password: string,
}

export async function getUserList(req: Request, res: Response) {
    const users = await UserModel.getUserList();
    res.status(200).json(users)
}

export async function register(req: Request, res: Response) {
    const { username, password }: IUserInfo = req.body

    if (username === undefined || password === undefined) {
        return res.status(200).json({
            err_code: 1001,
            err_msg: '请输入用户名或密码'
        })
    }

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
    const { username, password }: IUserInfo = req.body
    const userInfo = await UserModel.getUser(username)
    // 校验用户是否存在
    if (!userInfo) {
        return res.status(403).json({
            err_code: 1003,
            err_msg: 'The username does not exist in database'
        })
    }
    // 密码校验
    const isValidPassword = bcrypt.compareSync(password, userInfo.password!)

    if (!isValidPassword) {
        return res.status(403).json({
            err_code: 1004,
            err_msg: 'Got a wrong password'
        })
    }

    const userToken = jwt.sign(
        { id: String(userInfo._id) }, SECRET_KEY!, { expiresIn: '60s' }
    )

    // 登录成功 返回 username token level

    res.status(200).json({
        msg: 'ok',
        data: {
            username: userInfo.username,
            level: userInfo.level,
            access_token: userToken
        }
    })
}

export async function getProfile(req: Request, res: Response) {
    res.status(200).json({
        msg: 'getProfile'
    })
}
