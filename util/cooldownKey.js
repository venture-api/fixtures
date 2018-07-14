const {cooldown} = require('../dictionary');

/**
 * Generate cooldown key for a facility to use in Redis
 *
 * @param {String} facilityId - facility ID
 * @return {String} Redis key
 */
module.exports = (facilityId) => {
    return `${cooldown}:${facilityId}`;
};
