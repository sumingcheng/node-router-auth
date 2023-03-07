import axios from "axios";
import { Storage } from "@/libs/utils";

axios.defaults.baseURL = 'http://localhost:8000'

axios.interceptors.request.use(config => {
    const access_token = Storage.get('access_token')

    if (access_token) {
        config.headers.Authorization = `Bearer ${ access_token }`
    }

    return config
}, error => Promise.reject(error))

axios.interceptors.response.use(response => {
    return response.data
}, error => Promise.reject(error))

export default axios
