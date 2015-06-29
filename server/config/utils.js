// renders an index page with data it might need
var hero = null;
var User = require('../models/user.model');

// takes an optional article that the server will then render
module.exports.renderIndex = function(req, res, article){
  var options = {root: __dirname + '/../../client/', dotfiles: 'deny'};

  var constructInjectionObjects = function(){
    // use an article if we get passed one
    article = article || null;

    // owner is info for a signed in page owners view
    var owner = null;

    // hero data is used to populate the page view with info about the content author
    var heroInfo = { id: hero._id,
                 username: hero.username,
                 bio: hero.bio
               };

    // if we have an authed user
    if (req.user) {
      // lets build a user object of the data we want
      // to return/render to the user
      owner = { _id: req.user._id,
                username: req.user.username };

    } else {
      owner = null;
    }

    res.render('index', {owner: owner, hero: heroInfo, article: article});
  };

  if (!hero){
    User.find(function(err, results){
      if (err){
        console.error(err);
        return;
      }
      if(results.length === 0){
        // lets instead render index here with a different state?
        // that way once registration is complete, no reload is needed?
        res.sendFile('app/user/register.html', options);
      } else {
        hero = results[0];
        constructInjectionObjects();
      }
    });
  } else {
    constructInjectionObjects();
  }

};
