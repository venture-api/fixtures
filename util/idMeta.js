const { type: typeMap } = require('../maps/id');

/**
 * Extract principal type from an ID
 *
 * @param {String} id - principal ID
 * @return {{type:String, unique:String}} - extracted meta info
 */
module.exports = (id) => {

    const [ principalTypeAbbr, unique, subTypeAbbr ] = id.split('-');
    return { type: typeMap[principalTypeAbbr], unique };
};
