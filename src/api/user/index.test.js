import test from 'tape'
import server from '~/server'
import mongoose from 'mongoose'
import User from './model'
import { disconnectMemoryDB } from '~/services/mongoose'

const fastify = server

test('setup', async t => {
    await fastify.ready()
    await User.create({ email: 'example@test.com', name: 'max mustermann', role: 'user', picture: 'https://picsum.photos/200' })
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
