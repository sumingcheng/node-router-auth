import { NextFunction, Request, Response } from "express";

export async function checkAuth(req: Request, res: Response, next: NextFunction) {
    next()
}
