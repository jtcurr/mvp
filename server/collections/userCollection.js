var mongoose = require('mongoose');
//set a mogose schema to set outline of table
var userSchema = mongoose.Schema({
  username: String,
  password: String
});

var User = mongoose.model('User', userSchema);

module.exports.send = function(req, res) {
	console.log('in');

  var user = new User(req.body);
	user.save(function (err, results) {
		if (err) {
			console.log('Error sending message to database');
		}
		res.send(results);
	})
}