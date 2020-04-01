import { hashPassword } from '~/utils'
import { isEmpty } from 'lodash'

export default (app) => {
    app.addHook('preHandler', async (request, reply) => {
        if (['PUT', 'POST'].includes(request.req.method) && isEmpty(request.body)) {
            reply.code(400)
            return new Error('body can not be empty')
        }

        if (request.body?.password !== undefined) {
            request.body.password = await hashPassword(request.body.password)
        }
    })
}
