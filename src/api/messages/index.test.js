import test from 'tape'
import server from '~/server'
import mongoose from 'mongoose'
import Message from './model'
import { disconnectMemoryDB } from '~/services/mongoose'

const fastify = server

test('setup', async t => {
    await fastify.ready()
    await Message.create({ content: 'reeee' })
    t.end()
})

test('hello world', async t => {
    t.assert(true, true)
    t.end()
})

test.onFinish(async () => {
    await server.close()
    await mongoose.disconnect()
    await disconnectMemoryDB()
})
