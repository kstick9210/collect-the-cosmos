const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    user: {

    },
    name: {
        type: String,
        required: true
    },
    photos: [String]
}, {timestamps: true})

module.exports = mongoose.model('Collection', collectionSchema);