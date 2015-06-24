var Article = require('../controllers/article.controller.js');
var passport = require('passport');

// REST routes for an article
module.exports = function(app) {

  // all routes that need auth will have it by adding passport.authenticate()
  // to the beggining of the action parameters list

  // main articles routes
  app.route('/articles')
    .get(function(req, res) {
      // Call the article controller and ask for a list of articles
      console.log('Return a list of articles here instead of this stub.');
      res.json([{title: 'A day in the sun', createdOn: new Date.now(), content: 'Enjoy!', owner: 'Admin'}]);
    })
    .post(function(req, res) {
      // create a new article
      console.log('Trying to create a new article');
      res.json('You tried to create a new article');
    });

    // specific article crud
    app.route('/articles/:article_id')
      .get(function(req, res) {
        // retrieve and return 1 article
        console.log('You requested: ', req.params.article_id);
        res.json('You requested article id: ', req.params.article_id);
      })
      .put(function(req, res){
        // update a single article
        console.log('You attempted to update: ', req.params.article_id);
        res.json('You attempted to update: ', req.params.article_id);
      })
      .delete(function(req, res){
        // delete an article
        console.log('You attempted to delete: ', req.params.article_id);
        res.json('You attempted to delete: ', req.params.article_id);
      });
};
