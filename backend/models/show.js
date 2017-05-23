var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

//mongoose sub-doc of the parent schema
var showSchema = new mongoose.Schema({
  date: { type: String},
  time: { type: String},
  bands: { type: String},
  event_url: { type: String},
  event_name: { type: String},
  other_info: { type: String},
});


var Show = mongoose.model('Show', showSchema);
module.exports = Show;
