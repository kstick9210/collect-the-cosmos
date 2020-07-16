const Collection = require('../models/collection');

module.exports = {
    create
}

function create(req, res) {
    req.body.user = req.user._id;
    Collection.create(req.body)
    .then(collection => {res.json(collection)})
    .catch(err => {res.json(err)})
}