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
    // at this point we have already authed through passport
    // we could call it again here or do some other auth
    // but (right now) this only gets called
    // if passport.authenticate has all ready succeeded

    // return a json object with info about the user
    // the client uses this as an authentication object
    return res.json({user: {
      username: req.user.username,
      id: req.user._id
      // add bio here
    }
   });
  },
  signout: function(req, res, next){

    // use the passport provided
    // logout method to end our session
    req.logout();

    // no need to redirect here?
    // just let the client go on doing its thing
    res.json({logout: 'Success'});
    // res.redirect('/');
  }

};
