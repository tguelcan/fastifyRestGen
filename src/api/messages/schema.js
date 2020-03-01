export const params = apiName => ({
    $id: apiName,
    type: 'object',
    required: ['id'],
    properties: {
        id: { 
            type: 'number',         
            description: 'simple id'
        }

    }
})

export const documentation = apiName => ({
    description: apiName,
    tags: [apiName]
})
