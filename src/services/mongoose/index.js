import mongoose from 'mongoose'
mongoose.Promise = global.Promise

/* istanbul ignore next */ 
export default async (app, { databaseConfig: { uri, options } }, next) => {
    await mongoose.connect(uri, options)
    console.log('\x1b[36m','Database connected','\x1b[0m')
    next()
}
