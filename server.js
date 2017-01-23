var express = require('express');
//define a new variable that will hold a new express server
var app = express();
var port = 3000;
//handle a route for a get request when a user tries to access the root node
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use(express.static(__dirname));

//start the server listening on the local port, defaultly set to 3000
app.listen(port, function(req, res) {
	console.log('Listening on port ' + port);
})