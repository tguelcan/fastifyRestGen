import { index, show, create, update, destroy } from './controller'
import { params, body, documentation } from './schema'

export const autoPrefix = '/user'

export default async (route) => {
    await route.addSchema(params(autoPrefix))

    route.get('/', { 
        schema: {        
            ...documentation(autoPrefix)
        } 
    }, index)

    /**
     * GET ONE Method
     */
    route.get('/:id', { 
        schema: {
            ...documentation(autoPrefix),
            params: `${autoPrefix}#`
        }
    }, show)

    /**
     * POST Method
     */
    route.post('/', { 
        schema: {        
            ...documentation(autoPrefix),
            body
        } 
    }, create)

    /**
     * PUT Method
     */
    route.put('/:id', { 
        schema: {
            ...documentation(autoPrefix),
            params: `${autoPrefix}#`,
            body
        }
    }, update)

    /**
     * DELETE Method
     */
    route.delete('/:id', { 
        schema: {
            ...documentation(autoPrefix),
            params: `${autoPrefix}#`
        }
    }, destroy)
}

