const express = require('express');
const app = express();
const session = require('express-session');
app.set('trust proxy', 1);
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 6000}
}));
const flash = require('express-flash');
app.use(flash());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/login_register')
var userSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 2},
    last_name: {type: String, required: true},
    email: {type: String, required: true, minlength: 5},
    password: {type: String, required: true},
    birthday: {type: Date, required: true}
})
var User = mongoose.model('User', userSchema);

app.get('/', function(req,res) {
    res.render('index');
});

const bcrypt = require('bcrypt-as-promised');
app.post('/register', function(req,res) {
    User.find({email: req.body.email}, function(err, users) {
        if (users.length == 0) {
            console.log("EMAIL DOESN't EXIST")
            bcrypt.hash(req.body.password, 10)
            .then(hashed_password => {
                var user = new User({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: hashed_password,
                birthday: req.body.birthday})
                user.save(function(err) {
                    if (err) {
                        for (var key in err.errors) {
                            req.flash('register', err.errors[key].message);
                        }
                        res.redirect('/');
                    }
                    else {
                        res.redirect('/success')
                    }
                })
            })
            .catch(error => {
                console.log("HASHING DOESN't WORK");
            })
        } else {
            console.log("EMAIL EXISTS");
            req.flash('register', 'The Email is already taken');
            res.redirect('/');
        }
    });

});

app.post('/login', function(req,res) {
    User.find({email: req.body.email}, function(err, users) {
        if (err) {
            console.log("ERROR");

        }
        else {
            if (users.length > 0) {
                bcrypt.compare(req.body.password, users[0].password)
                .then(result => {
                    if (result) {
                        res.redirect('/success')
                    }
                })
                .catch(error => {
                    req.flash('login', 'Incorrect login information.');
                    console.log(error);
                    res.redirect('/');
                })
            } else {
                req.flash('login', "Incorrect login information.");
            }
            
        }
    })
})

app.get('/success', function(req,res) {
    res.send("SUCCESSFULLY REGISTERED/LOGGED IN");
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})