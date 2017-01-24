var Chat = require('../models/chatModel.js');

module.exports.retrieve = function(res, req){
  Chat.find({}, function(err, results){
 console.log(results)
  })
}

// module.exports.retrieve = function(req, res) {
// 	Moot.find({}, function (err, results) {
// 		res.json(results);
// 	});

module.exports.create = function(res, req){
	console.log('create')
  var Chat = new Chat();
}