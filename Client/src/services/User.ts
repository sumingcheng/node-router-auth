import http from '@/libs/http'
import { IResponse, IUserInfo } from "@/types";

export async function loginService(userInfo: IUserInfo) {
    return await http.post<IResponse, unknown>('/api/user/login', userInfo)
}

export async function registerService(userInfo: IUserInfo) {
    return await http.post<IResponse, unknown>('/api/user/register', userInfo)
}

export async function checkLoginService() {
    return await http.post<IResponse, unknown>('/api/user/checkLogin')
}


