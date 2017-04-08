var mongoose = require('mongoose');

var MemberSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  clubs: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Club'}],
  joinedDate: Date,
  birthDay: Date,
});

Member = mongoose.model('Member', MemberSchema); //name of collection is member

module.exports.Member = Member;
module.exports.Schema = MemberSchema;
