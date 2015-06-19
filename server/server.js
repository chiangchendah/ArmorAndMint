// config/requirements
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;

// serve assets from our client directory
app.use(express.static(path.join(__dirname, 'client')));

// start the server
app.listen(port);
console.log('Listening on port ' + port);
