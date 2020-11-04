import { words as w, phrases as ph } from '../dictionary';
import id from './id';


export default {

    type: 'object',

    properties: {

        id,

        name: {
            type: 'string',
            minLength: 3,
            maxLength: 50
        },

        code: {
            type: 'string',
            minLength: 3,
            maxLength: 6
        },

        type: {
            type: 'string',
            enum: [ w.factory, w.warehouse, w.mine ]
        },

        resourceType: {
            type: 'string',
            enum: [ ph.ironOre ]
        }
    },

    required: [ 'name', 'type' ]
};
