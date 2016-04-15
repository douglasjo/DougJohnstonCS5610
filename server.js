var express = require('express');
var http = require('http');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var multer = require('multer'); // v1.0.5
var upload = multer();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/assignment');
/*
var passport      = require('passport');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');

app.use(express.static(__dirname + '/public/assignment/client'));

app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
*/

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port, ipaddress);

app.listen(3000);
require("./public/assignment/server/app.js")(app);

/*

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var http = require('http');

var app = express();
ç



*/











/*
var express = require('express');
var http = require('http');
var app = express();
app.use(express.static(__dirname + '/public'));


//start bodyParser paste
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var mongoose = require('mongoose');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

*/


/*
app.post('/profile', upload.array(), function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
});
*/
//end bodyParser paste

//res.render('index.html');

/*
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port, ipaddress);

require("./public/assignment/server/app.js")(app);
    */