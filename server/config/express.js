// This file handles the express-specific logic,
// such as server setup and request handling

// External modules
var express = require('express');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// are we sure we need this?
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');

// Internal modules
var config = require('./config');

// Modular variables
var app = express();

// Express configuration
// may use something like dev || combined ->OR-> config.logState
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, '../../client'), {index: false})); //static files served, index:false allows custom '/' routing
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.session({ secret: 'keyboard cat' }));


// passport config
// can this go in the user files instead?
var User = require('../models/user.model');
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Server setup, files, and routing are exported from here
module.exports = function() {

  // could make this its own express router?
  // -> http://expressjs.com/api.html#router
  require('../routes/user.routes.js')(app, passport);

  // handle 404s
  app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
  });

  // start the server
  app.listen(config.port);
  console.log('Listening on port ' + config.port);

  return app;
};
