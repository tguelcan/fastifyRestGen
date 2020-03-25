// Routing
export const params = apiName => ({
    $id: apiName,
    type: 'object',
    required: ['id'],
    properties: {
        id: { 
            type: 'string',         
            description: 'simple id'
        }
    }
})

export const body = {
    type: 'object',
    required: ['content'],
    properties: {
        content: {
            type: 'string',         
            description: 'body'
        }
    }
}

export const documentation = apiName => ({
    description: apiName,
    tags: [apiName]
})



