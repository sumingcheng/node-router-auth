import * as mongoose from "mongoose";

export default function dbConnect() {
    mongoose.set('strictQuery', false)
    mongoose.connect(
        'mongodb://127.0.0.1:27017/test',
    )
    const db = mongoose.connection;

    db.on('error', (err) => {
        console.log(err)
    })
    db.on('close', () => {
        console.log('Database close')
    })
    db.on('open', () => {
        console.log('Database open')
    })

    return db
}
