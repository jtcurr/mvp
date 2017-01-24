var mongoose = require('mongoose');

module.exports = mongoose.model('chat',{
	name: String,
	message: String
})