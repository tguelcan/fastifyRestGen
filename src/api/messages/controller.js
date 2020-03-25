import { merge } from 'lodash'
import Message from './model'

export const index = async ({ query }, res) => {
    const messages = await Message.find(query)
    messages.map((message) => message.view())
    res.send(messages)
}

export const show = async ({ params }, res) => {
    console.log(this)
    const message = await Message.findById(params.id)
    message ? res.send(message.view()) : res.notFound()
}

export const create = async ({ body }, res) => {
    const message = await Message.create(body)
    res.send(message.view())
}

export const update = async ({ body, params }, res) => {
    const message = await Message.findById(params.id)
    message ? merge(message, body).save() : res.notFound()
    res.send(message.view())
}

export const destroy = async ({ params }, res) => {
    const message = await Message.findById(params.id)
    message ? message.remove() : res.notFound()
    res.send('success')
}