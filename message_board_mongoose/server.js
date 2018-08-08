const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 6000}
}));
app.use(flash());

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');

var commentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Comments must have a name"]},
    content: {type: String, required: [true, "Comments must have content"], minlength: 10}
}, {timestamps: true})
var blogSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Posts must have a title"]},
    content: {type: String, required: [true, "Posts must have a comment"], minlength: 10},
    comments: [commentSchema]
}, {timestamps: true});
var Comment = mongoose.model('Comment', commentSchema);
var Blog = mongoose.model('Blog', blogSchema);


app.get('/', function(req,res) {
    Blog.find({}, function(err, blogs) {
        res.render('index', {all_blogs: blogs});
    })
});

app.post('/post_msg', function(req, res) {
    var blog = new Blog({name: req.body.name, content: req.body.msg});
    blog.save(function(err) {
        if (err) {
            console.log("GOT AN ERRORR")
            for (var key in err.errors) {
                req.flash('new_blog', err.errors[key].message);
            }
            res.redirect('/');
        } 
        res.redirect('/');
    });
});

app.post('/post_comment/:id', function(req, res) {
    var comment = new Comment({name: req.body.name, content: req.body.msg});
    comment.save(function(err) {
        if (err) {
            console.log("GOT AN ERROR");
            for (var key in err.errors) {
                req.flash('new_blog', err.errors[key].message);
            }
        } else{
            Blog.findOneAndUpdate({_id: req.params.id}, {$push: {comments: comment}}, function(err, data) {
                if (err) {
                    console.log("FAILED TO ADD COMMENT");
                }
            })
        }
        res.redirect('/');
    });
});

app.listen(8000, function() {
    console.log("listening for port 8000");
});