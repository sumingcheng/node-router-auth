import axios from "axios";
import { Storage } from "@/libs/utils";

const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_API_BASE_URL,
    // 超时
    timeout: 10000
})

service.interceptors.request.use(config => {
    const access_token = Storage.get('access_token')

    if (access_token) {
        config.headers.Authorization = `Bearer ${ access_token }`
    }

    return config
}, error => Promise.reject(error))

service.interceptors.response.use(response => {
    return response.data
}, error => Promise.reject(error))

export default service
