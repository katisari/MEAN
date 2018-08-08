const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 6000}
}));

const flash = require('express-flash');
app.use(flash());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));
app.set('views', "./client/views");
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening for port 8000");
});