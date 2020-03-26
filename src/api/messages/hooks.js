import { MongooseQueryParser } from 'mongoose-query-parser'

// import { assign } from 'lodash'
/**
 * DOCS
 * https://www.fastify.io/docs/v2.13.x/Hooks/
 */
const parser = new MongooseQueryParser()

export default (app, defaultQueryParams) => {
    app.addHook('preParsing', (req, reply, done) => {
        const parsed = parser.parse(req.query, defaultQueryParams)
        req.query = parsed
        console.log(req.query)
        done()
    })
}
