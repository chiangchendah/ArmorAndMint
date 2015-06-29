// External modules
var mongoose = require('mongoose');

// Internal modules
var express = require('./config/express'); // we are delegating our express configuration and setup to this file
var config = require('./config/config'); // app specific configuration can be done in this file

// Modular variables
var db = mongoose.connection; // create a db connection

//var dbConnectionString = 'mongodb://' + config.db.url + ':' + config.db.port + '/' + config.db.name; // create a connection string -> 'mongodb://localhost:port/test'
var dbConnectionString = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/lightCMS';
mongoose.connect(dbConnectionString); // create the connection
db.on('error', console.error.bind(console, 'connection error:')); // Database Error handling

// Run our entire app inside the database connection callback
db.once('open', function (callback) {
  // im not sure this is necessary?
  // do we need to instantiate this
  var app = express(); // call our express configuration/setup here
});