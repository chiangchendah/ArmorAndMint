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
    // the client uses this as a sort of authentication object
    return res.json({user: {
      username: req.user.username,
      id: req.user._id
      }
   });
  },
  signout: function(req, res, next){

    // use the passport provided
    // logout method to end our session
    req.logout();

    // send some data to the client
    // it doesnt even use this currently
    res.json({logout: 'Success'});
  },

  // Update owner info
  update: function(req, res, next){
    // the route gets passed in with a user ID which express
    // kindly sticks on req.params.userId for us

    console.log('Attempting to update: ', req.body);

    // search for a user with that id
    User.findOne({_id: req.params.userId}, function(err, result){
      if (err){
        console.error(err);
        next();
      }

      console.log(result);

      // update the user properties
      for (var key in req.body) {
        if (req.body.hasOwnProperty(key)){
          result[key] = req.body[key];
        }
      }

      console.log(result);
      result.save();

    });
  }

};
