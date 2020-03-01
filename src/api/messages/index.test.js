import test from 'tape'
import server from '~/server'

let fastify = server

test('setup', t => {
    // Setup here
    t.end()
})

test('GET `/api/messages` route', t => {
    t.plan(4)

    fastify.inject({
        method: 'GET',
        url: '/api/messages'
    }, (err, response) => {
        t.error(err)
        t.strictEqual(response.statusCode, 200)
        t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
        t.deepEqual(response.json(), { hello: 'world' })
    })

})

test('GET `/api/messages/:id` route', t => {
    t.plan(4)

    fastify.inject({
        method: 'GET',
        url: '/api/messages/2'
    }, (err, response) => {
        t.error(err)
        t.strictEqual(response.statusCode, 200)
        t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
        t.deepEqual(response.json(), { id: 2 })
    })

})

test('teardown', t => {
    fastify.close()
    t.end()
})