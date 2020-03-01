import { params, documentation } from './schema'

export const autoPrefix = '/messages'

export default async (route, opts, next) => {
    await route.addSchema(params(autoPrefix))

    // Add Routes

    route.get('/', { 
        schema: {        
            ...documentation(autoPrefix),
        } 
    }, async(req, res) => {
        console.log('---route.mongoose.instance')
        const testMessage = new route.mongoose.Message({content: 'testhallo'})
        testMessage.save()
        res.send({ hello: 'world' })
    })

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

