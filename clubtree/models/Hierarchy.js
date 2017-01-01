var mongoose = require('mongoose');

var HierarchySchema = new mongoose.Schema({
  hierarchyDict: String
})

mongoose.model('Hierarchy', HierarchySchema);
