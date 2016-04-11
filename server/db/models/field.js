'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');

var schema = new mongoose.Schema({
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    date: Date,
    prompt: String,
    active: {type: Boolean, default: true}
});


mongoose.model('Field', schema);