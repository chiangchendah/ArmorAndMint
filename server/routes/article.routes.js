var Article = require('../controllers/article.controller.js');
var passport = require('passport');

module.exports = function(app) {
  // create rest routes for an article
  app.route('/article')
    .post(function(req, res){
      console.log('routed');
      res.json('neat');
    })
    .get(function(req, res) {
      console.log('You got got');
      res.json('super sweet');
    })
};
