// articleController.js
//
// methods for working with the articles model

var Article = require('../models/article.model');
var passport = require('passport');

module.exports = {

  // return json with the results
  findAll: function(res){
    Article.find(function(err, results){
      if (err){
        console.error(err);
        return res.status(500).json(err);
      }
      res.json(results);
    });
  },

  // returns a single article object
  // the id is passed in via a restful api call to /articles/:article_id
  // where :article_id is the actual article id
  findOne: function(req, res) {
    // express does some voodoo for us that turns the get request url
    // into something we can access on req.params.article_id
    // see article.routes.js for the route created to extract this param
    // see: http://expressjs.com/api.html#req.params
    Article.findOne({_id: req.params.article_id}, function(err, result){
      // TODO: better error handling
      if (err) throw err;
      return res.json(result);
    });

  },

  // Create a new article
  create: function(req, res) {

    // attempts to create a new article using the
    // data stored in the req.body object
    Article.create(req.body, function(err, result){
      // TODO: better error handling
      if (err) throw err;
      console.log('created new article: ', result);
      return res.json(result);
    });
  },

  // Update an article with new data
  update: function(req, res){

    // find the article by id
    // (see findOne()above for explanation of how we get :article_id)
    Article.findOne({_id: req.body.article_id}, function(err, article){
      // TODO: better error handling
      if (err) throw err;

      // assign the posted variables to this model
      // this should most likely be done differently
      // right now we are basically iterating through
      // the parameters on req.body and writing those values
      // to the article we got back from the db
      for (var key in req.body) {
        if (req.body.hasOwnProperty(key)){
          article[key] = req.body[key];
        }
      }

      // save the changes we made to the model
      article.save();

      // return some json with the updated model
      res.json(article);
    });
  },

  // delete an article
  // (also by :article_id see findOne if more clarification is needed)
  remove: function(req, res){
    Article.remove({_id: req.params.article_id}, function(err, result){
      if (err) throw err;
      res.json('You deleted: ', req.params.article_id);
    });
  }
};
