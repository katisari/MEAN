var animals = require('./../controllers/animals.js');
const mongoose = require('mongoose');
var Animal = mongoose.model('Animal');


module.exports = function(app) {
    app.get('/', function(req,res) {
        animals.index(req,res);
    });

    app.get('/animal/new', function(req,res) {
        animals.new_form(req,res);
    });

    app.get('/animal/:id', function(req,res) {
        animals.get_details(req,res);
    });

    app.post('/animal', function(req,res) {
        animals.create(req,res);
    });

    app.get('/animal/edit/:id', function(req,res) {
        animals.find_one(req,res);
    });

    app.post('/animal/:id', function(req,res) {
        animals.edit(req,res);
    });

    app.get('/animal/destroy/:id', function(req,res) {
        animals.remove(req,res);
    })
}