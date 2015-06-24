var User = require('../models/user.model');
var passport = require('passport');

module.exports = {

  // signup / register a user
  register: function(req, res, next) {
    // register is provided by passport
    User.register(new User({ username : req.body.username }),
      req.body.password,
      function(err, user) {
        if (err) {
          console.error('Cannot create user: ', req.body.username, ' ', err);
          return res.json({ user : user, error: err});
        }
        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
      });
  },
  signin: function(req, res, next){
    // find the user by username
      // authenticate with passport
        // send them a token?
    // else send some json that lets the client update with an error message
  }

};
