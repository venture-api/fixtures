const {rdrn} = require('./facility');
const {bonner} = require('./player');
const {ironOre, moisture} = require('../dictionary');

module.exports = {
    ironOne: {
        id: 'RS-DeXGA947IFAAFKRSBJ-IO',
        producedAt: rdrn.id,
        ownerId: bonner.id,
        type: ironOre,
        defects: [moisture],
        location: rdrn.id
    }
};
