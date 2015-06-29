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

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../views/');

// Express configuration
// may use something like dev || combined ->OR-> config.logState
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: config.secret
}));

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

  // index - basically everything comes through this route
  app.get('/', function(req, res){
    // this should at least be memoized
    // so we dont have to hit the db every single time
    User.find(function(err, user){
      if(user.length === 0){
        // lets instead render index here with a different state?
        // that way once registration is complete, no reload is needed?
        res.sendFile('app/user/register.html', options);
      } else {
        // if we have an authed user
        if (req.user) {
          // lets build a user object of the data we want
          // to return/render to the user
          res.render('index', {owner: {
                                _id: req.user._id,
                                name: req.user.username,
                                 //bio: user.bio
                               }
          });
        } else {
          res.render('index', {owner: null});
        }
      }
    });
   });

  // could make this its own express router?
  // -> http://expressjs.com/api.html#router
  require('../routes/user.routes.js')(app);

  // add an api route for handling content posts and requests
  // this should always be authenticated for POST events
  require('../routes/article.routes.js')(app);

  // handle 404s (or dont - this case always send the index.html)
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
