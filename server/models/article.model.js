var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  body: String,
  createdOn: {type: Date, default: Date.now},
  author: String
});

module.exports = mongoose.model('Article', ArticleSchema);
