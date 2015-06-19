// config/requirements
var mongoose = require('mongoose');

// we are delegating our express configuration and setup to this file
var express = require('./config/express');

// app specific configuration can be done in this file
var config = require('./config/config');

// create a db connection
var db = mongoose.connection;

// create a connection string -> 'mongodb://localhost/test'
var dbConnectionString = 'mongodb://' + config.db.url + '/' + config.db.name;

// create the connection
mongoose.connect(dbConnectionString);

// Database Error handling
db.on('error', console.error.bind(console, 'connection error:'));

// Run our entire app inside the database connection callback
db.once('open', function (callback) {
  // call our express configuration/setup here
  var app = express();
});


