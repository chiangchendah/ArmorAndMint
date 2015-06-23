var User = require('../controllers/user.controller.js');

module.exports = function(app, passport) {
  // http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/#.VYiH3hNVhHw

  app.post('/register', function(req, res, next) {
    console.log(req.body);
    User.register(req, res, next);
  });

  app.post('/login', passport.authenticate('local'), function(req, res) {
    // why are we redirecting here -
    // what should the authentication method have returned?
    // I think we really want to passport authenticate, and then
    // start an authed session?
    res.redirect('/');
  });
};
