import { index, show, create, update, destroy, updatePassword } from './controller'
import { params, createBody, updateBody, passwordBody, documentation } from './schema'
import addHooks  from './hooks'

export const autoPrefix = '/user'

export default async (route) => {
    await route.addSchema(params(autoPrefix))
    await addHooks(route)
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
            body: createBody
        } 
    }, create)

    /**
     * PUT Method
     */
    route.put('/:id', { 
        schema: {
            ...documentation(autoPrefix),
            params: `${autoPrefix}#`,
            body: updateBody
        }
    }, update)

    /**
     * PUT Method
     */
    route.put('/:id/password', { 
        schema: {
            ...documentation(autoPrefix),
            params: `${autoPrefix}#`,
            body: passwordBody
        }
    }, updatePassword)

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

