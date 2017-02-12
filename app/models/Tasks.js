var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  taskName: String,
  description: String,
  startedDate: Date,
  dueDate: Date,
  // 0 is unfinished, 1 is finished
  status: Number,
  club: { type: mongoose.Schema.Types.ObjectId, ref: 'Club'},
  assignedMembers: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Member'}]
});

mongoose.model('Task', TaskSchema);
