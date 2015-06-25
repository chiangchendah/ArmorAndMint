var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  createdOn: {type: Date, default: Date.now},
  body: String
});

module.exports = mongoose.model('Article', ArticleSchema);
