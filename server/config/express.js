//This file handles the express-specific logic, such as server setup and request handling

// External modules
var express = require('express'),
    path = require('path'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),

// Internal modules
    config = require('./config'),

// Modular variables
    app = express();

// Express configuration
app.use(express.static(path.join(__dirname, '../../client'), {index: false})); //static files served, index:false allows custom '/' routing
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

// passport config
var Account = require('../models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Server setup, files, and routing are exported from here
module.exports = function() {
  var options = {root: __dirname + '/../../client/', dotfiles: 'deny'};

  // Routing logic
  // Root
  app.get('/', function(req, res){ //root route
    Account.find(function(err, doc){
      if(doc.length === 0){
        res.sendFile('register.html', options);
      } else {
        res.sendFile('index.html', options);
      }
    });
  });
  // 404 page not found
  app.get('/404', function(req, res){
    //send a 404 page not found file
    res.send('404 - Page not found') //placeholder
  });
  // 401 unauthorized
  app.get('/401', function(req, res){
    //send a 401 unauthorized (login failed) page
    res.send('401 - Unauthorized') //placeholder
  });

  // http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/#.VYiH3hNVhHw

  app.post('/register', function(req, res) {
    console.log(req.body);
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) { return res.json({ account : account }); }
      passport.authenticate('local')(req, res, function () {
        res.redirect('/');
      });
    });
  });

  app.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
  });

  // start the server
  app.listen(config.port);
  console.log('Listening on port ' + config.port);

  return app;
};
