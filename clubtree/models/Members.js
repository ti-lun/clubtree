var mongoose = require('mongoose');

var MemberSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  clubs: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Club'}]
});

mongoose.model('Member', MemberSchema);
