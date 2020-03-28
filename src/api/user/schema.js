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
    required: ['email', 'name', 'role'],
    properties: {
        email: {
            type: 'string',         
            description: 'user email'
        },
        name: {
            type: 'string',
            description: 'username',
            maxLength: 32,
            minLength: 3
        },
        role: {
            type: 'string',
            description: 'user role',
            enum: ['user', 'admin']
        }, picture: {
            type: 'string',
            description: 'user profile picture'
        }
    }
}

export const documentation = apiName => ({
    description: apiName,
    tags: [apiName]
})



