var http = require('http'),
	express = require('express'),
	socket = require('socket.io'),
	mongoose=require('mongoose');

var app = express();
var port = process.env.PORT || 8000;
 
 var server=http.createServer(app).listen(port,function(){
 	console.log('server starting on port:%s',port);
 })

var io=socket.listen(server); 


console.log(socket);