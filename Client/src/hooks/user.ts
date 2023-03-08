import { reactive, Ref, toRefs } from "vue";
import { loginService, registerService } from "@/services/User";
import { Storage } from "@/libs/utils";

function checkUserInfo(field: Ref, num: number): boolean {
    return field.value.length >= num
}

export function userLogin() {
    const state = reactive({
        username: '',
        password: '',
    })

    const submitUserInfo = async () => {
        return await loginService({
            username: state.username,
            password: state.password
        })
    }

    return {
        ...toRefs(state),
        checkUserInfo,
        submitUserInfo
    }
}

export function userStorage() {
    const setUserStorage = (accessToken: string, level: string) => {
        Storage.set('access_token', accessToken)
        Storage.set('user_level', level)
    }
    const removeUserStorage = () => {
        Storage.remove('access_token')
        Storage.remove('user_level')
    }

    return {
        setUserStorage, removeUserStorage
    }
}

export function userRegister() {
    const state = reactive({
        username: "",
        password: "",
        rePassword: ""
    })

    const submitUserInfo = async () => {
        return await registerService({
            username: state.username,
            password: state.password
        })
    }

    const comparePassword = (): boolean => {
        return state.password === state.rePassword
    }

    return {
        ...toRefs(state),
        submitUserInfo,
        comparePassword,
        checkUserInfo
    }
}
