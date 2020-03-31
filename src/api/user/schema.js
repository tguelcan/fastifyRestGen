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

export const createBody = {
    type: 'object',
    required: ['email', 'name', 'password'],
    properties: {
        email: {
            type: 'string',         
            description: 'user email'
        },
        password: {
            type: 'string',         
            description: 'user password'
        },
        name: {
            type: 'string',
            description: 'username',
            maxLength: 32,
            minLength: 3
        },
        picture: {
            type: 'string',
            description: 'user profile picture'
        }
    }
}

export const updateBody = {
    type: 'object',
    required: [],
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
        picture: {
            type: 'string',
            description: 'user profile picture'
        }
    }
}

export const passwordBody = {
    type: 'object',
    required: ['password'],
    properties: {
        password: {
            type: 'string',         
            description: 'user password'
        }
    }
}


export const documentation = apiName => ({
    description: apiName,
    tags: [apiName]
})



