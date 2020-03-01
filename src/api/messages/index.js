import { params, documentation } from './schema'

export const autoPrefix = '/messages'
export default (route, opts, next) => {
    
    route.addSchema(params)


    // Add Routes

    route.get('/', { 
        schema: {        
            ...documentation,
        } 
    }, async(req, res) => 
        res.send({ hello: 'world' })
    )

    route.get('/:id', { 
        schema: {
            ...documentation,
            params: 'messages#'
        }
    }, async(req, res) => 
        res.send(req.params)
    )

    next()
}

