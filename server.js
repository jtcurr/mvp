var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 3000;
var chatCollection = require('./server/collections/chatsCollection.js');

mongoose.connect('mongodb://localhost/27017/chats');

app.use(bodyParser());
//handle a route for a get request when a user tries to access the root node
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/chats', chatCollection.retrieve);

app.post('/api/chats', chatCollection.create);

app.use(express.static(__dirname));

//start the server listening on the local port, defaultly set to 3000
app.listen(port, function(req, res) {
	console.log('Listening on port ' + port);
})