import path from 'path'

export const appInfo = {
    title: 'Test openapi',
    description: 'testing the fastify swagger api',
    version: '0.1.0',
    externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
    }
}

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
    autoloadConfig: {
        dir: path.join(__dirname, 'api'),
        options: { prefix: '/api' },
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