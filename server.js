var path = require('path');

var express = require('express');

var serverHost = process.env.IP || 'localhost';
var serverPort = process.env.PORT || '8080';

var app = express();

var appRoot = path.resolve(__dirname, 'public');

app.use(express.static(appRoot));

app.get('*', function (req, res) {
    
    res.sendFile(path.resolve(appRoot, 'index.html'));
});

app.listen(serverPort, serverHost, function () {
    
    console.log('App listening: http://' + serverHost + ':' + serverPort + '/');
});