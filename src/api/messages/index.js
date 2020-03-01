import { params, documentation } from './schema'

export const autoPrefix = '/messages'

export default (route, opts, next) => {
    route.addSchema(params(autoPrefix))

    // Add Routes

    route.get('/', { 
        schema: {        
            ...documentation(autoPrefix),
        } 
    }, async(req, res) => 
        res.send({ hello: 'world' })
    )

    route.get('/:id', { 
        schema: {
            ...documentation(autoPrefix),
            params: `${autoPrefix}#`
        }
    }, async(req, res) => 
        res.send(req.params)
    )

    next()
}

