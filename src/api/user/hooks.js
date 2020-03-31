import { hashPassword } from '~/utils'

export default (app) => {
    app.addHook('preHandler', async (request, reply) => {
        if (request.body?.password !== undefined) {
            request.body.password = await hashPassword(request.body.password)
        }
        return
    })
}
