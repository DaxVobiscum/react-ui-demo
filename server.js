var path = require('path');

var express = require('express');

var serverHost = process.env.IP || 'localhost';
var serverPort = process.env.PORT || '8080';

var app = express();

app.use(express.static('public'));

/*app.get('/', function (req, res) {
    
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});*/

app.listen(serverPort, serverHost, function () {
    
    console.log('App listening: http://' + serverHost + ':' + serverPort + '/');
});
