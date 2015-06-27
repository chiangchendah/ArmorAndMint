// services.js
//
// Handles all crud requests for our article element
// server should conform to RESTful routes
//
// This is implemented barebones, and could use much refinement.
angular.module('lightCMS.ArticleService', [])
  .factory('User', function($http){
    var user = {};

    // stubbed for now - in the future this should actually do stuff
    // like you know.. check if the user is actually authed
    user.isAuthed = function() {
      // you can change this now to see how it effects page events
      return true;
    };

    return user;
  })
  .factory('Articles', function($http) {
    var article = {};

    // fetchAll()
    // returns a promise
    // that in turn tries to return all articles
    // todo:
    //    allow limits in the # returned?
    //    (angular) filters?
    //    better error handling
    article.fetchAll = function(){
      return $http.get('/articles');
    };

    // fetchOne()
    // takes an article id as a string
    // returns a promise that will try to
    // provide one article or (null? err? what?)
    article.fetchOne = function(id){
      console.log('Fetching one');
      return $http.get('/articles/' + id);
    };

    // create()
    // takes an article object
    // it should have at least a title and a body property
    article.create = function(article){
      // TODO: do some validation here?
      return $http.post('/articles', article);
    };

    // pass in an article object with the updated properties
    // and 'PUT' it to the server
    article.update = function(article){
      return $http.put(article);
    };

    // TODO: delete

    return article;
});
