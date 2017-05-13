var mongoose = require('mongoose');


// Club Model
var Club = mongoose.model('clubs', new mongoose.Schema({
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
}));

// Member Model
var Member = mongoose.model('members', new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  clubs: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Club'}],
  joinedDate: Date,
  birthDay: Date,
}));

// Task Model
var Task = mongoose.model('Task', new mongoose.Schema({
  taskName: String,
  description: String,
  startedDate: Date,
  dueDate: Date,
  // 0 is unfinished, 1 is finished
  status: Number,
  club: { type: mongoose.Schema.Types.ObjectId, ref: 'Club'},
  assignedMembers: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Member'}]
}));

// Tree Model
var Tree = mongoose.model('Tree', new mongoose.Schema({
  Organizers: [ { username: String, rank: Number } ],
  Members: [ { username: String, rank: Number } ]
}));


// Export all the models we created
module.exports.Club = Club;
module.exports.Member = Member;
module.exports.Task = Task;
module.exports.Tree = Tree;