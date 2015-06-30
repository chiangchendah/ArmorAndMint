// this file contains 'global' configuration info
// Do we really need this that much anymore with the db portion gone? Can it not be reintegrated into express.js?
module.exports = {
  port: process.env.PORT || 8080, // the server port
  secret: 'poptart eating cats like lasagna too',
};
