var User = require('../models/user.model');
var jwt  = require('jwt-simple');
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
          // create a new token here
          console.log({username: user.username, userId: user._id});
          var token = jwt.encode({username: user.username, userId: user._id}, 'awesomesauce');
          // send it back to the user
          res.json({token: token});
        });
      });
  },
  signin: function(req, res, next, passport){

  }

};
