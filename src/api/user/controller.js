import { merge } from 'lodash'
import User from './model'

export const index = async ({ query }, res) => {
    const users = await User.find(query)
    res.send(users.map((u) => u.view()))
}

export const show = async ({ params }, res) => {
    const user = await User.findById(params.id)
    user ? res.send(user.view()) : res.notFound()
}

export const create = async ({ body }, res) => {
    const user = await User.create(body)
    res.send(user.view())
}

export const update = async ({ body, params }, res) => {
    const user = await User.findById(params.id)
    user ? merge(user, body).save() : res.notFound()
    res.send(user.view())
}

export const destroy = async ({ params }, res) => {
    const user = await User.findById(params.id)
    user ? user.remove() : res.notFound()
    res.send('success')
}