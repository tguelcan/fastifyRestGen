import mongoose from 'mongoose'
mongoose.Promise = global.Promise

/* istanbul ignore next */ 
export const connect = async ({ uri, options }) => {
    await mongoose.connect(uri, options)
    console.log('\x1b[36m','Database connected','\x1b[0m')
}

export default mongoose
