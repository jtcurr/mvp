var mongoose = require('mongoose');
//set a mogose schema to set outline of table
var chatSchema = mongoose.Schema({
  name: String,
  message: String
});

var Chat = mongoose.model('Chat', chatSchema);

module.exports.send = function(req, res) {
	console.log('Sending');
	//var saveChat = new Chat {{ res.body }}
	// saveChat.save(function (err, results) {
	// 	if (err) {
	// 		console.log('Error sending message to database');
	// 	} else {
	// 		res.send(results);
	// 	}
	// })
}

module.exports.retrieve = function(req, res) {
	Chat.find({}, function(err, result) {
    res.json(result);
	});
}