const options = {
    confKey: 'config',
    schema: {
        type: 'object',
        required: [ 'PORT' ],
        properties: {
            PORT: {
                type: 'string',
                default: 3000
            },
            URL: {
                type: 'string',
                default: '127.0.0.1'
            }
        }
    }
}

export default options