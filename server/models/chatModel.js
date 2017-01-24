var mongoose = require('mongoose');

var ChatModel = mongoose.Schema({
  name: String,
  message: String
})
module.exports = ChatModel;