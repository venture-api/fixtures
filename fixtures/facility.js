const {ironOre} = require('../constants/resource');
const {factory, warehouse} = require('../constants/facility');
const {bonner} = require('./player');
const {brookmarsh} = require('./region');


module.exports = {
    rdrn: {
        name: 'Road Runner Ore',
        id: 'FA-WTQA6GN3DK27IT-IO',
        code: 'RDRN',
        ownerId: bonner.id,
        type: factory,
        resourceType: ironOre,
        region: brookmarsh.name
    },
    gawa: {
        name: 'Golf Augusta Warehouse',
        id: 'FA-6YMB7H63DCXBPQ-WH',
        code: 'GAWA',
        ownerId: bonner.id,
        type: warehouse,
        region: brookmarsh.name
    }
};
