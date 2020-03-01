import fastify from 'fastify'
import fastifyEnv from 'fastify-env'
import oas from 'fastify-oas'
import helmet from 'fastify-helmet'
import formbody from 'fastify-formbody'
import rateLimit from 'fastify-rate-limit'
import autoload from 'fastify-autoload'
import blipp from 'fastify-blipp'

import { server, apiDoc, logger } from '~/config'

const app = fastify({ logger })

app.register(blipp)
app.register(formbody)
app.register(rateLimit, server?.rateLimitConfig)
app.register(oas, apiDoc)
app.register(autoload, server?.autoloadConfig)
app.register(helmet)

const start = async () => {
    try {
        await app.register(fastifyEnv, server).ready()
        /* istanbul ignore next */
        await app.listen(app.config?.PORT)
        app.oas()
        app.blipp()
    } 
    catch (err) /* istanbul ignore next */ {
        console.log(err)
        app.log.error(err)
        process.exit(1)
    }
}

/* istanbul ignore next */
process.on('uncaughtException', error => {
    console.error(error)
})
/* istanbul ignore next */
process.on('unhandledRejection', error => {
    console.error(error)
})

start()

export default app