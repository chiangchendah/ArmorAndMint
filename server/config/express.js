var express = require('express');
var app = express();
var path = require('path');
var config = require('./config');

// we are exporting this block of code so that it can be run from
// inside our main server file. mainly just so we can keep
// concerns seperated into their own files.
module.exports = function() {

  // routes and/or inclusions of module specific routes can be done here

  // serve assets from our client directory
  app.use(express.static(path.join(__dirname, '../../client')));

  // start the server
  app.listen(config.port);
  console.log('Listening on port ' + config.port);

  return app;

};
