import mongoose from 'mongoose'
import MongodbMemoryServer from 'mongodb-memory-server'

mongoose.Promise = global.Promise
let mongoServer
const mode = process.env.NODE_ENV

/* istanbul ignore next */ 
export default async (app, { databaseConfig: { uri, options } }, next) => {
    
    let memoryUri
    if (mode === 'test') {
        mongoServer = new MongodbMemoryServer()
        memoryUri = await mongoServer.getConnectionString()
    }

    await mongoose.connect(mode === 'test' ? memoryUri : uri, options)
    console.log('\x1b[36m','Database connected','\x1b[0m')
    next()

}

// disconnect the MongodbMemoryServer (only for tests)
export const disconnectMemoryDB = async () => {
    if (mongoServer !== undefined) await mongoServer.stop()
}