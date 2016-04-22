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
mongoose.connect('mongodb://localhost/assignment');

//mongoose.connect('mongodb://localhost/project');

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port, ipaddress);

app.listen(3000);
require("./public/assignment/server/app.js")(app);


