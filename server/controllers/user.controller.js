var User = require('../models/user.model');

module.exports = {

  register: function(req, res, next, passport) {
    User.register(new User({ username : req.body.username }),
      req.body.password,
      function(err, user) {
        console.log('For real bird?');
        if (err) {
          console.error('Cannot create user: ', req.body.username, ' ', err);
          return res.json({ user : user, error: err});
        }
        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
      });
  }

};
