var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  createdOn: Date,
  body: String
});

module.exports = mongoose.model('Article', ArticleSchema);
