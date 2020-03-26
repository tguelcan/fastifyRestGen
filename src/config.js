import dotenv from 'dotenv'
import path from 'path'

// Load dotenv
dotenv.config()

/**
 * General application informations
 */
export const appInfo = {
    title: 'Test openapi',
    description: 'testing the fastify swagger api',
    version: '0.1.0',
    externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
    }
}

/**
 * Database configuration
 */
const databaseConfig = {
    uri: process.env.MONGO_URI,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        config: {
            autoIndex: true
        }
    }
}

const defaultQueryParams = {
    limit: 5
}

/**
 * Server configuration
 */
export const server = {
    confKey: 'config',
    // Options: https://github.com/fastify/fastify-env#usage
    schema: {
        type: 'object',
        required: [ 'PORT' ],
        properties: {
            PORT: {
                type: 'string',
                default: 3000
            }
        }
    },
    // Options: https://github.com/fastify/fastify-autoload#example
    apiAutoloadConfig: {
        dir: path.join(__dirname, 'api'),
        options: { prefix: '/api', defaultQueryParams },
        ignorePattern: /.*(test|spec).js/
    },
    serviceAutoloadConfig: {
        dir: path.join(__dirname, 'services'),
        options: { databaseConfig },
        ignorePattern: /.*(test|spec).js/
    },
    // Options: https://github.com/fastify/fastify-rate-limit#usage
    rateLimitConfig: {
        max: 100,
        timeWindow: '1 minute',
        whitelist: ['127.0.0.1']
    }
}

export const logger = { 
    // Options: https://github.com/pinojs/pino-pretty#options
    prettyPrint: {
        colorize: true
    }, 
    level: 'info' 
}


export const apiDoc = {
    // Options: https://www.npmjs.com/package/fastify-oas#toc
    routePrefix: '/docs',
    swagger: {
        info: appInfo,
        externalDocs: appInfo.externalDocs,
        consumes: ['application/json'],
        produces: ['application/json'],
        host: process.env.URL || 'localhost:3000'
    },
    exposeRoute: true
}