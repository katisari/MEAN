const mongoose = require('mongoose');
var Animal = mongoose.model('Animal');

module.exports = {
    index: function(req,res) {
        Animal.find({}, function(err,animals) {
            res.render('index', {all_animals: animals});
        });
    },
    new_form: function(req,res) {
        res.render('new_form');
    },
    get_details: function(req,res) {
        Animal.findOne({_id: req.params.id}, function(err, animal) {
            res.render('details', {animal: animal});
        });
    },
    create: function(req,res) {
        var animal = new Animal({title: req.body.name, desc: req.body.desc});
        animal.save(function(err) {
            if (err) {
                for (var key in err.errors) {
                    req.flash('new_animal', err.errors[key].message);
                }
                res.redirect('/animal/new');
            } else {
                console.log("successful");
                res.redirect('/');
            }
        })
    },
    find_one: function(req,res) {
        Animal.findOne({_id: req.params.id}, function(err, animal) {
            res.render('edit', {animal: animal, animal_id: req.params.id});
        });
    },
    edit: function(req,res) {
        Animal.findOne({_id: req.params.id}, function(err, animal) {
            animal.title = req.body.name;
            animal.desc = req.body.desc;
            animal.save(function(err) {
                if (err) {
                    for (var key in err.errors) {
                        req.flash('new_animal', err.errors[key].message);
                    }
                    res.redirect('/animal/edit/' + req.params.id);
                } else {
                    console.log("successful");
                    res.redirect('/');
                }
            });
        });
    },
    remove: function(req,res) {
        Animal.remove({_id: req.params.id}, function(err) {
            res.redirect('/');
        });
    }
}