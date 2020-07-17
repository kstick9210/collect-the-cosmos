const Collection = require('../models/collection');

module.exports = {
    index,
    create,
    update
}

function index(req, res) {
    Collection.find({ user: req.user._id})
    .then(collections => {res.json(collections)})
    .catch(err => {res.json(err)})
}

function create(req, res) {
    req.body.user = req.user._id;
    Collection.create(req.body)
    .then(collection => {res.json(collection)})
    .catch(err => {res.json(err)})
}

function update(req, res) {
    Collection.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(collection => {res.json(collection)})
    .catch(err => {res.json(err)})
}