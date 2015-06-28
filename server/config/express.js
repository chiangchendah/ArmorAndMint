// This file handles the express-specific logic,
// such as server setup and request handling

// External modules
var express = require('express');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var morgan = require('morgan');

// Internal modules
var config = require('./config');

// Modular variables
var app = express();

// Express configuration
// may use something like dev || combined ->OR-> config.logState
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: 'rainbow poptart cat'}));
//app.use(express.session({ secret: 'keyboard cat' }));

app.use(express.static(path.join(__dirname, '../../client'), {index: false})); //static files served, index:false allows custom '/' routing

// passport config
// this could maybe be moved to the files that need it
var User = require('../models/user.model');
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Server setup, files, and routing are exported from here
module.exports = function() {
  var options = {root: __dirname + '/../../client/', dotfiles: 'deny'};

  app.get('/', function(req, res){
      User.find(function(err, doc){
        if(doc.length === 0){
          res.sendFile('app/user/register.html', options);
        } else {
          res.sendFile('index.html', options);
        }
      });
    });

  // add an api route for handling content posts and requests
  // this should always be authenticated for POST events

  // could make this its own express router?
  // -> http://expressjs.com/api.html#router
  require('../routes/user.routes.js')(app);

  // article routes
  require('../routes/article.routes.js')(app);

  // handle 404s
  app.use(function(req, res, next) {
    // always just send index if they have an invalid route
    res.redirect('/');
    //res.status(404).send('Sorry cant find that!');
  });

  // start the server
  app.listen(config.port);
  console.log('Listening on port ' + config.port);

  return app;
};
