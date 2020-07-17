const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    photos: [{}]
}, {timestamps: true})

module.exports = mongoose.model('Collection', collectionSchema);