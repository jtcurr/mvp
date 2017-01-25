var express = require ('express');
var app = express();
var port = 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var chatCollection = require('./server/collections/chatsCollection.js');
var userCollection = require('./server/collections/userCollection.js');

mongoose.connect('mongodb://localhost:27017');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log('Connected to MongoDB')
});

app.use(bodyParser());

app.get('/chatBase/chats', chatCollection.retrieve);

app.post('/chatBase/chats', chatCollection.send);

app.post('/chatBase/creds', userCollection.send);

app.get('/index', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/login.html');
})


app.use(express.static(__dirname));

app.listen(port, function(req, res){
	console.log('Listening on port ' + port);
})