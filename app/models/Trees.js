var mongoose = require('mongoose');

var TreeSchema = new mongoose.Schema({
  Organizers: [ { username: String, rank: Number } ],
  Members: [ { username: String, rank: Number } ]
});

mongoose.model('Tree', TreeSchema);
