var Article = require('../models/article.model');
var passport = require('passport');

module.exports = {
  findAll: function(res){
    Article.find(function(err, results){
      if (err){
        console.error(err);
        return res.status(500).json(err);
      }

      // return the results
      res.json(results);

    });
  },
  findOne: function(req, res) {
    // find one article (by id)
    Article.findOne({_id: req.params.article_id}, function(err, result){
      // TODO: better error handling
      if (err) throw err;
      return res.json(result);
    });

  },
  create: function(req, res) {
    // Create a new article
    Article.create(req.body, function(err, result){
      // TODO: better error handling
      if (err) throw err;
      console.log('created new article: ', result);
      return res.json(result);
    });
  },
  update: function(req, res){
    Article.findOne({_id: req.body.article_id}, function(err, result){
      // TODO: better error handling
      if (err) throw err;

      // assign the posted variables to this model
      for (var key in req.body) {
        if (req.body.hasOwnProperty(key)){
          result[key] = req.body[key];
        }
      }
      // save this model
      result.save();

      // send out the updated model
      res.json(result);
    });
  },
  remove: function(req, res){
    // delete an article
    Article.remove({_id: req.params.article_id}, function(err, result){
      if (err) throw err;
      res.json('You deleted: ', req.params.article_id);
    });
  }
};
