import id from './id';


export default {

    type: 'object',

    properties: {
        id,
        name: {
            type: 'string',
            minLength: 3
        },
        level: { enum: [ 0, 1, 2, 3 ]}
    }
}
