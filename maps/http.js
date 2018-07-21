const {read, create, update, destroy} = require('../dictionary');


module.exports = {
    verbs: {
        get: read,
        post: create,
        patch: update,
        delete: destroy
    }
};
