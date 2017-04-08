var mongoose = require('mongoose');

var ClubSchema = new mongoose.Schema({
  clubName: String,
  description: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member'}],
  createdDate: Date,
  establishedDate: Date
});

mongoose.model('Club', ClubSchema);
