import { merge } from 'lodash'
import User from './model'

export const index = async ({ query }, res) => {
    try {
        const users = await User.find(query)
        res.send(users.map((u) => u.view()))
    } catch (error) {
        res.badRequest(error)
    }
}

export const show = async ({ params }, res) => {
    try {
        const user = await User.findById(params.id)
        user ? res.send(user.view(true)) : res.notFound()
    } catch (error) {
        res.badRequest(error)
    }
}

export const create = async ({ body }, res) => {
    try {
        const user = await User.create(body)
        res.send(user.view(true))
    } catch (error) {
        res.badRequest(error)
    }
}

export const update = async ({ body, params }, res) => {
    try {
        const user = await User.findById(params.id)
        user ? merge(user, body).save() : res.notFound()
        res.send(user.view(true))            
    } catch (error) {
        res.badRequest(error)
    }
}

export const destroy = async ({ params }, res) => {
    try {
        const user = await User.findById(params.id)
        user ? user.remove() : res.notFound()
        res.send('success')
    } catch (error) {
        res.badRequest(error)
    }
}