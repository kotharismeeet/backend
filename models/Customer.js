const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    contactnum : {
        type: Number,
        required: true
    },
    /*registeredSince : {
        type: String,
        required: true
    },*/
    isAdmin : {
        type: Boolean,
        default: false,
        required: true
    }
}, {
    timestamps : true
});

module.exports = mongoose.model('Customer',customerSchema); 