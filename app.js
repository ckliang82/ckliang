var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var passport = require('passport');

//testing acct
//mongoose.connect('mongodb://cktest:820322@ds045511.mlab.com:45511/cktest');
// ckliang
mongoose.connect('mongodb://ckliang_portfolio:j5JTM5ZF@ds013911.mlab.com:13911/ckliang');

require('./models/portfolio');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/index');

app.use('/', routes);


var port = process.env.PORT || 8080; // set our port

app.listen(port);


module.exports = app;