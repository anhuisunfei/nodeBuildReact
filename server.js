var http = require('http'),
	express = require('express'),
	socket = require('socket.io'),
	mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 8000;

var server = http.createServer(app).listen(port, function() {
	console.log('server starting on port:%s', port);
})

var io = socket.listen(server);
var messages = [];
io.on('connection', function(socket) {
	socket.on('send', function(_text) {
		console.log(_text);
		var data={
			id: messages.length + 1,
			message: _text,
			date: Date.now()
		};
		messages.push(data);
		io.emit('tweet',data);
	})
})


console.log(socket);