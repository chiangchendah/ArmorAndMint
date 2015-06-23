var User = require('../controllers/user.controller.js');

module.exports = function(app, passport) {
  console.log('Test!');

  // TODO: Move appropriate functions out into
  // the user controller file.

  // this probably should be in the main express file.
  // and just not find users??
  // app.get('/', function(req, res){
  //   // is there even any reason to call user.find here??
  //   User.find(function(err, doc){
  //     // TODO: something different here
  //     if(doc.length === 0){
  //       res.sendFile('register.html', options);
  //     } else {
  //       res.sendFile('index.html', options);
  //     }
  //   });
  // });

  // http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/#.VYiH3hNVhHw

  app.post('/register', function(req, res, next) {
    console.log(req.body);
    User.register(req, res, next, passport);
  });

  app.post('/login', passport.authenticate('local'), function(req, res) {
    // why are we redirecting here -
    // what should the authentication method have returned?
    res.redirect('/');
  });
};
