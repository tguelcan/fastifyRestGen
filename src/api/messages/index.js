import { index, show, create, update, destroy } from './controller'
import { params, body, documentation } from './schema'
import addHooks  from './hooks'

export const autoPrefix = '/messages'

export default async (route, { defaultQueryParams }) => {
    // await route.addSchema(documentation(autoPrefix))
    await route.addSchema(params(autoPrefix))
    await addHooks(route, defaultQueryParams)

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

