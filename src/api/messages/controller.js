import { merge } from 'lodash'
import Message from './model'

export const index = async ({ query: { filter, skip, limit, sort, projection, population } }, res) => {
    const messages = await Message.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(projection)
        .populate(population)
    res.send(messages.map((message) => message.view()))
}

export const show = async ({ params: { id } }, res) => {
    const message = await Message.findById(id)
    message ? res.send(message.view()) : res.notFound()
}

export const create = async ({ body }, res) => {
    const message = await Message.create(body)
    res.send(message.view())
}

export const update = async ({ body, params: { id } }, res) => {
    const message = await Message.findById(id)
    message ? merge(message, body).save() : res.notFound()
    res.send(message.view())
}

export const destroy = async ({ params: { id }  }, res) => {
    const message = await Message.findById(id)
    message ? message.remove() : res.notFound()
    res.send('success')
}