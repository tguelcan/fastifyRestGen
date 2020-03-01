import path from 'path'
import fastify from 'fastify'
import fastifyEnv from 'fastify-env'
import oas from 'fastify-oas'
import helmet from 'fastify-helmet'
import autoload from 'fastify-autoload'
import blipp from 'fastify-blipp'

import options from '~/config'

const app = fastify({logger: true})

app.register(blipp)

app.register(oas, {
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'Test openapi',
            description: 'testing the fastify swagger api',
            version: '0.1.0',
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here',
        },
        consumes: ['application/json'],
        produces: ['application/json'],
        host: 'localhost:3000'
    },
    exposeRoute: true
})
app.register(autoload, {
    dir: path.join(__dirname, 'api'),
    options: { prefix: '/api' },
    ignorePattern: /.*(test|spec).js/
})
app.register(helmet)

const start = async () => {
    try {
        await app.register(fastifyEnv, options).ready()
        await app.listen(app.config?.PORT, app.config?.URL)
        app.oas()
        app.blipp()
    } catch (err) {
        console.log(err)
        app.log.error(err)
        process.exit(1)
    }
}

process.on('uncaughtException', error => {
    console.error(error)
})
process.on('unhandledRejection', error => {
    console.error(error)
})

start()

export default app