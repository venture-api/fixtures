const verb = require('../dictionaries/verb');


module.exports = {
    verbs: {
        get: verb.read,
        post: verb.create,
        patch: verb.update,
        delete: verb.delete
    }
};
