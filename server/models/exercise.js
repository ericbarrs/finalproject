const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a Schema
const exerciseSchema = new Schema ({
    exercise: {
        type: String,
        required: true
    },
    repition: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    area: {
        type: String,
        required: true
    }
})

module.exports = exercise = mongoose.model('exercise', exerciseSchema)