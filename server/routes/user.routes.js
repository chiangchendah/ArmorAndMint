var User = require('../controllers/user.controller.js');
var passport = require('passport');

module.exports = function(app) {
  // http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/#.VYiH3hNVhHw

  app.post('/register', function(req, res, next) {
    User.register(req, res, next);
  });

  app.post('/signin', passport.authenticate('local'), function(req, res, next) {
    console.log('authed!');
    User.signin(req, res, next);
  });

  app.post('/signout', function(req, res, next){
    User.signout(req, res, next);
  });
};
