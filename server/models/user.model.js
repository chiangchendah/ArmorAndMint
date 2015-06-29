var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
  bio: {type: String, default: ''}
});

// this populates our user object with everything we need for now
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
