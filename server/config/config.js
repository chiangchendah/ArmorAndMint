// this file contains 'global' configuration info
module.exports = {

  // the server port
  port: process.env.PORT || 8080,

  // database info
  db: {
    // this may need to change for a hosted solution
    url: 'localhost',
    // the name of the database itself
    name: 'lightCMS'
  },

};
