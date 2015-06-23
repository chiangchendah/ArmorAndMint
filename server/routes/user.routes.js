var User = require('../models/user.model');

module.exports = function(app, passport) {
  var options = {root: __dirname + '/../../client/', dotfiles: 'deny'};
  console.log('Test!');

  app.get('/', function(req, res){
    // is there even any reason to call user.find here??
    User.find(function(err, doc){
      // TODO: something different here
      if(doc.length === 0){
        res.sendFile('register.html', options);
      } else {
        res.sendFile('index.html', options);
      }
    });
  });

  // http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/#.VYiH3hNVhHw

  app.post('/register', function(req, res) {
    console.log(req.body);
    User.register(new User({ username : req.body.username }),
      req.body.password, function(err, user) {
        if (err) { return res.json({ user : user }); }
        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
      });
  });

  app.post('/login', passport.authenticate('local'), function(req, res) {
    // why are we redirecting here -
    // what should the authentication method have returned?
    res.redirect('/');
  });
};
