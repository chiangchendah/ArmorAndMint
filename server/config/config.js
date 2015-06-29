// this file contains 'global' configuration info
module.exports = {
  port: process.env.PORT || 8080, // the server port
  secret: 'poptart eating cats like lasagna too',
  // TODO: stop putting this on github/ use a config.example.js?
  db: {
    // This object is used to create the database connection string
    // THIS MAY BE EXTRANEOUS NOW
    url: process.env.MONGOLAB_URL || '127.0.0.1',
    port: process.env.MONGOLAB_PORT || 27017,
    name: process.env.MONGOLAB_DB || 'lightCMS'
  },
};
