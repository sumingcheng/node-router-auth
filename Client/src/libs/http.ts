import axios from "axios";
import { Storage } from "@/libs/utils";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

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
