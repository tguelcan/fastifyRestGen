export const params = {
    $id: 'messages',
    type: 'object',
    required: ['id'],
    properties: {
        id: { 
            type: 'number',         
            description: 'simple id'
        }

    }
}

export const documentation = {
    description: 'messages',
    tags: ['messages']
}
