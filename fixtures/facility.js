const {ironOre, factory, warehouse, transport} = require('../dictionary');
const {bonner, adams} = require('./player');
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
    },
    boex: {
        name: 'Boys Express',
        id: 'FA-UDHRSBOWVE31O1-TR',
        code: 'BOEX',
        ownerId: adams.id,
        type: transport,
        region: brookmarsh.name
    }
};
