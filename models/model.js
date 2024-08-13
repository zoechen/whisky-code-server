const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    userID: {
        required: true,
        type: String
    },
    step: {
        required: true,
        type: String
    },
    score: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('player', dataSchema)
