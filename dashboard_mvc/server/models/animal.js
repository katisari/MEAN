const mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
    title: {type: String, required: true},
    desc:  {type: String, required: true, minlength: 10}
}, {timestamps: true});
var Animal = mongoose.model('Animal', animalSchema);