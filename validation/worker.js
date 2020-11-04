import id from './id';


export default {

    type: 'object',

    properties: {
        id,
        name: {
            type: 'string',
            minLength: 3
        }

    }
}
