// bring in mongoose
const mongoose = require('mongoose');

// bring schema from mongoose
const Schema = mongoose.Schema;

// create schema and pass it with the different fields that you want
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('users', UserSchema);