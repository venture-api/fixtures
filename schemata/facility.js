const w = require('../dictionary/words');


module.exports = {

    type: 'object',

    properties: {

        id: {
            type: 'string',
            minLength: 20,
            maxLength: 20 // FC-WTQA6GN3DK27IT-GN
            // TODO probably add regex pattern
        },

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
            enum: [ w.ironOre ]
        }
    },

    required: [ 'name', 'type' ]
};
