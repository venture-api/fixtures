const { rdrn } = require('./facility');
const { bonner } = require('./player');
const { ironOre } = require('../dictionary/words');

module.exports = {
    ironOne: {
        id: 'RS-DeXGA947IFAAFKRSBJ-IO',
        producedAt: '2019-08-04T13:51:33.219Z',
        originId: rdrn.id,
        ownerId: bonner.id,
        type: ironOre,
        quality: 80,
        locationId: rdrn.id
    }
};
