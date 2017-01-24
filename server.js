var express = require ('express');
var app = express();
var port = 3000;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html');
})

app.use(express.static(__dirname));

app.listen(port, function(req, res){
	console.log('Listening on port ' + port);
})