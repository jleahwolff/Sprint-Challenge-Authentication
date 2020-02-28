const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findBy,
    findById,
};

function add(user) {
    return db("users")
    .insert(user, "id")
    .then(ids => {
        const [id] = ids;
        return findById(id);
    })
}

function findBy(filter) {
return db('users').where(filter);
}


function findById(id) {
    return db('users')
    .select("id", "username")
    .where({ id })
    .first();
}