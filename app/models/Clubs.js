var mongoose = require('mongoose');

var ClubSchema = new mongoose.Schema({
  clubName: String,
  description: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  organizers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  survey: {
    dateFounded: Number,
    numberOfMembers: Number,
    meetingLocation: String,
    meetingTime: String
  },
  personality: {
    values: String
  },
  tags: [String],
  category: String,
  createdDate: Date,
  establishedDate: Date
});

mongoose.model('Club', ClubSchema);
