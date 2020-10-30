import w from '../dictionary/words.js';
import ph from '../dictionary/phrases.js';
import pl from './players.js';
import rg from './regions.js';


export default {
    rdrn: {
        name: 'Road Runner Ore',
        id: 'FA-WTQA6GN3DK27IT-IO',
        code: 'RDRN',
        ownerId: pl.bonner.id,
        type: w.mine,
        resourceType: ph.ironOre,
        region: rg.brookmarsh.name
    },
    gawa: {
        name: 'Golf Augusta Warehouse',
        id: 'FA-6YMB7H63DCXBPQ-WH',
        code: 'GAWA',
        ownerId: pl.bonner.id,
        type: w.warehouse,
        region: rg.brookmarsh.name
    },
    boex: {
        name: 'Boys Express',
        id: 'FA-UDHRSBOWVE31O1-TR',
        code: 'BOEX',
        ownerId: pl.adams.id,
        type: w.transport,
        region: rg.brookmarsh.name
    }
};
