// bring in mongoose
const mongoose = require('mongoose');

// bring schema from mongoose
const Schema = mongoose.Schema;

// create schema and pass it with the different fields that you want
const IdeaSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('ideas', IdeaSchema);