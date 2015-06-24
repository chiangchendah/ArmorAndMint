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
      res.json([{title: 'A day in the sun', createdOn: Date.now(), content: 'Enjoy!', owner: 'Admin'}]);
      //res.json(results);

    });
  },
  findOne: function(req, res) {
    // find one article (by id)

  },
  create: function(req, res) {
    // Create a new article

  }
};
