// services.js
//
// Handles all crud requests for our article element
// server should conform to RESTful routes
angular.module('lightCMS.ArticleService', [])
  .factory('Articles', function() {
    var data = {};
    data.test = 50000;

    // setup crud methods for articles

    return data;
});
