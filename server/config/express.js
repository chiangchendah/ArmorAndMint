// External modules
var express = require('express'),
    path = require('path'),

// Internal modules
    config = require('./config'),

// Modular variables
    app = express();

// Server setup, files, and routing are exported from here
module.exports = function() {
  var options = {root: __dirname + '/../../client/', dotfiles: 'deny'};

  // Routing logic
  app.get('/', function(req, res){ //root route
    res.sendFile('index.html', options, function(err){
      if (err) throw err;
    });
  });

  // serve assets from our client directory
  app.use(express.static(path.join(__dirname, '../../client')));

  // start the server
  app.listen(config.port);
  console.log('Listening on port ' + config.port);

  return app;
};
