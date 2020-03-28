import { merge } from 'lodash'
import Message from './model'

export const index = async ({ query: { filter, skip, limit, sort, projection, population } }, res) => {
    try {
        const messages = await Message.find(filter)
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .select(projection)
            .populate(population)
        res.send(messages.map((message) => message.view()))        
    } catch (error) {
        res.badRequest(error)
    }
}

export const show = async ({ params: { id } }, res) => {
    try {
        const message = await Message.findById(id)
        message ? res.send(message.view()) : res.notFound()    
    } catch (error) {
        res.badRequest(error)
    }
}

export const create = async ({ body }, res) => {
    try {
        const message = await Message.create(body)
        res.send(message.view())            
    } catch (error) {
        res.badRequest(error)
    }
}

export const update = async ({ body, params: { id } }, res) => {
    try {
        const message = await Message.findById(id)
        message ? merge(message, body).save() : res.notFound()
        res.send(message.view())            
    } catch (error) {
        res.badRequest(error)
    }
}

export const destroy = async ({ params: { id }  }, res) => {
    try {
        const message = await Message.findById(id)
        message ? message.remove() : res.notFound()
        res.send('success')    
    } catch (error) {
        res.badRequest(error)
    }
}