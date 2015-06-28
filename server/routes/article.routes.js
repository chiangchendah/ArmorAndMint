var Article = require('../controllers/article.controller.js');
var passport = require('passport');

// REST routes for an article
module.exports = function(app) {

  // all routes that need auth will have it by adding passport.authenticate()
  // to the beggining of the action parameters list

  // main articles routes
  app.route('/api/articles')
    .get(function(req, res) {
      // Call the article controller and ask for a list of articles
      Article.findAll(res);
    })
    .post(passport.authenticate('local'),
      function(req, res) {
      // create a new article
      Article.create(req, res);
    });

    // specific article crud
    app.route('/api/articles/:article_id')
      .get(function(req, res) {
        // retrieve and return 1 article
        Article.findOne(req, res);
      })
      .put(passport.authenticate('local'),
        function(req, res){
        // update a single article
        Article.update(req, res);
      })
      .delete(passport.authenticate('local'),
        function(req, res){
        // delete an article
        Article.remove(req, res);
      });
};
