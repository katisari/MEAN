const express = require('express');
const app = express();
const server = app.listen(8000);
var io = require('socket.io')(server);
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.get('/', function(req,res){
    res.render('index');
})

io.on ('connection', function(socket) {
    socket.on('posting_form', function(data) {
        var all_output = ""
        for (var key in data) {
            all_output += key + ": " + data[key] + ". ";
        }
        socket.emit('updated_message', {msg: all_output});
        const rand_num = Math.floor((Math.random() * 1000) + 1);
        socket.emit('random_num', {msg: rand_num})
    })
}) 
