var express = require('express');
var http = require('http');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer();

app.use(express.static(__dirname + '/public/assignment/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/assignment');


var passport      = require('passport');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');

app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//mongoose.connect('mongodb://localhost/project');

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var port = process.env.OPENSHIFT_NODEJS_PORT || 5000;
app.listen(port, ipaddress);

require("./public/assignment/server/app.js")(app);


