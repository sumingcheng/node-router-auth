// 增加用户
import { IUserInfo } from "../controllers/User";
import { UserModel } from "../db";

async function addUser(userInfo: IUserInfo) {
    return await UserModel.create(userInfo)
}

async function getUserList() {
    return UserModel.find()
}

async function getUser(username: string) {
    return UserModel.findOne({ username })
}

async function getProfile(id: string) {
    const user = await UserModel.findOne({ _id: id })

    return user ? ({
        uid: user._id,
        username: user.username,
        level: user.level
    }) : null
}

// 为了区分哪些方法是操作数据的，要给它一个单独的命名空间进行管理
export default {
    addUser,
    getUserList,
    getUser,
    getProfile
}
