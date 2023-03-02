import { Request, Response } from "express";

export async function register(req: Request, res: Response) {
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
