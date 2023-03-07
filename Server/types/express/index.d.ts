// declare 声明一个全局变量或类型 扩展 Express 应用程序的类型定义。
// 扩展的时候一定要保障目录结构一致
declare namespace Express {
    interface Request {
        id?: string
    }
}
