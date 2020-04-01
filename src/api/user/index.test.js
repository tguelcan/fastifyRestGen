import test from 'tape'
import server from '~/server'
import mongoose from 'mongoose'
import User from './model'
import { disconnectMemoryDB } from '~/services/mongoose'
import { autoPrefix } from './'

let user,
    fastify = server

test('setup', async t => {
    await fastify.ready()
    user = await User.create({ email: 'example@test.com', name: 'max mustermann', picture: 'https://picsum.photos/200', password: 'SuperPassword123!' })
    t.end()
})


test(`GET /api${autoPrefix} route`, t => {
    t.plan(8)
    
    fastify.inject({
        method: 'GET',
        url: `/api${autoPrefix}`
    }, (err, response) => {
        t.error(err)
        t.strictEqual(response.statusCode, 200)
        t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
        t.deepEqual(response.json().length, 1)
        // values match 
        const responseUser = response.json()[0]
        t.strictEqual(responseUser.name, user.name)
        t.strictEqual(responseUser.role, user.role)
        t.strictEqual(responseUser.picture, user.picture)
        t.strictEqual(responseUser.email, user.email)

    })
})

test(`GET /api${autoPrefix}/:id route`, t => {
    t.plan(7)

    fastify.inject({
        method: 'GET',
        url: `/api${autoPrefix}/${user._id}`
    }, (err, response) => {
        t.error(err)
        t.strictEqual(response.statusCode, 200)
        t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
        const responseUser = response.json()
        t.strictEqual(responseUser.name, user.name)
        t.strictEqual(responseUser.role, user.role)
        t.strictEqual(responseUser.picture, user.picture)
        t.strictEqual(responseUser.email, user.email)
    })
})

test(`GET /api${autoPrefix}/:id route with wrong id`, t => {
    t.plan(2)

    fastify.inject({
        method: 'GET',
        url: `/api${autoPrefix}/123`
    }, (err, response) => {
        t.error(err)
        t.strictEqual(response.statusCode, 400)
    })
})


test(`POST /api${autoPrefix}/ route`, t => {
    t.plan(7)
    const payload = { name: 'itsme', email: 'me@mydomain.de', role: 'user', picture: 'https://picsum.photos/200', password: 'BestPassword1?' }

    fastify.inject({
        method: 'POST',
        url: `/api${autoPrefix}`,
        payload
    }, (err, response) => {
        console.log(response.body)
        t.error(err)
        t.strictEqual(response.statusCode, 200)
        t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
        const responseUser = response.json()
        t.strictEqual(responseUser.name, payload.name)
        t.strictEqual(responseUser.role, payload.role)
        t.strictEqual(responseUser.picture, payload.picture)
        t.strictEqual(responseUser.email, payload.email)
    })
})

test(`POST /api${autoPrefix}/ route with invalid body`, t => {
    t.plan(2)
    // TODO: test validation of certain properties
    const payload = { email: 'me@mydomain.de', role: 'user', picture: 'https://picsum.photos/200' }

    fastify.inject({
        method: 'POST',
        url: `/api${autoPrefix}`,
        payload
    }, (err, response) => {
        t.error(err)
        t.strictEqual(response.statusCode, 400)
    })
})



test(`PUT /api${autoPrefix}/:id route`, t => {
    t.plan(7)
    const payload = { email: 'example@test.com', name: 'max mustermann', role: 'user', picture: 'https://picsum.photos/400' }

    fastify.inject({
        method: 'PUT',
        url: `/api${autoPrefix}/${user._id}`,
        payload
    }, (err, response) => {
        t.error(err)
        t.strictEqual(response.statusCode, 200)
        t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
        const responseUser = response.json()
        t.strictEqual(responseUser.picture, payload.picture)
        t.strictEqual(responseUser.name, payload.name)
        t.strictEqual(responseUser.role, payload.role)
        t.strictEqual(responseUser.email, payload.email)
    })
})
test(`PUT /api${autoPrefix}/:id route empty body`, t => {
    t.plan(2)

    fastify.inject({
        method: 'PUT',
        url: `/api${autoPrefix}/${user._id}`,
        payload: {}
    }, (err, response) => {
        t.error(err)
        t.strictEqual(response.statusCode, 400)
    })
})

test(`DELETE /api${autoPrefix}/:id route with wrong id`, t => {
    t.plan(2)

    fastify.inject({
        method: 'DELETE',
        url: `/api${autoPrefix}/123`,
    }, async (err, response) => {
        t.error(err)
        t.strictEqual(response.statusCode, 400)
    })
})


test.onFinish(async () => {
    await server.close()
    await mongoose.disconnect()
    await disconnectMemoryDB()
})
