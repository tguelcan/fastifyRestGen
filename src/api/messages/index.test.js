import test from 'tape'
import server from '~/server'
import { autoPrefix } from './'
let fastify = server

test('setup', async t => {
    await fastify.ready()
    // Setup here
    t.end()
})

test(`GET /api${autoPrefix} route`, t => {
    t.plan(4)

    fastify.inject({
        method: 'GET',
        url: `/api${autoPrefix}`
    }, (err, response) => {
        t.error(err)
        t.strictEqual(response.statusCode, 200)
        t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
        t.deepEqual(response.json(), [])
    })

})

test(`GET /api/${autoPrefix}/:id route`, t => {
    t.plan(4)

    fastify.inject({
        method: 'GET',
        url: `/api${autoPrefix}/2`
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