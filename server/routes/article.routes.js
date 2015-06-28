var Article = require('../controllers/article.controller.js');
var passport = require('passport');

// this checks to see if this session is logged in
// if its not it returns some json with an error
// otherwise it calls next and lets the ball keep rolling
var checkAuth = function(req, res, next){
  if (req.user){
    return next();
  }
  res.json({error: 'must be authed to view that content'});
};

// article routes
//  where /:articleID is an actual article id in this case
//
// GET /articles  - returns a list of articles
// GET /articles/:articleID - returns a single article with articleID (articleID)
// POST /articles  - creates a new post using the posted form data
// PUT /articles/:articleID - edits an article
// DELETE /articles/:articleID - delete an article

module.exports = function(app) {

  // all routes that need auth will have it by adding passport.authenticate()
  // to the beggining of the action parameters list

  // pretty link article
  // TODO: Make this work :)
  // currently there is no way implemented to have the client render this
  app.route('/article/:title')
    .get(function(req, res, next){
      // search the db
      Article.findByTitle(req, res, next);
  });

  // main articles routes
  app.route('/api/articles')
    // Call the article controller and ask for a list of articles
    .get(function(req, res) {
      Article.findAll(res);
    })
    // create a new article
    .post(checkAuth,
      function(req, res) {
      Article.create(req, res);
    });

    // specific article crud
    app.route('/api/articles/:article_id')
      .get(function(req, res) {
        // retrieve and return 1 article
        Article.findOne(req, res);
      })
      .put(checkAuth,
        function(req, res){
        // update a single article
        Article.update(req, res);
      })
      .delete(checkAuth,
        function(req, res){
        // delete an article
        Article.remove(req, res);
      });
};
