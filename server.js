var path = require('path');

var express = require('express');

var serverHost = process.env.IP || 'localhost';
var serverPort = process.env.PORT || '8080';

var app = express();

app.use(express.static('public'));

app.listen(serverPort, serverHost, function () {
    
    console.log('App listening: http://' + serverHost + ':' + serverPort + '/');
});