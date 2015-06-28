var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  createdOn: {type: Date, default: Date.now, required: true},
  author: {type: String, required: true}
});

module.exports = mongoose.model('Article', ArticleSchema);
