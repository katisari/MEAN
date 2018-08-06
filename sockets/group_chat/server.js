const express = require('express');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);
var session = require('express-session');

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.use(session({
    secret: 'hello',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
  
app.get('/', function(req,res) {
    res.render('index');
});
var users = {};
var all_msg = [];

io.on('connection', function(socket) {
    socket.emit('greeting', all_msg);
    socket.on('got_new_user', function(data) {
        users[socket.id] = data;
        socket.broadcast.emit('new_user', {sessionid: socket.id, name: data});
        socket.emit('new_user', {sessionid: socket.id, name: data});
        console.log(socket.id);
    });
    socket.on('new_msg', function(data) {
        all_msg.push([data.name, data.msg]);
        io.emit('update_board', data);
    });
    socket.on('disconnect', function() {
        io.emit('user_disconnected', users[socket.id]);
        delete users[socket.id];
    });
});