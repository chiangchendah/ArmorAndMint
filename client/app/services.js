// services.js
//
// Handles all crud requests for our article element
// server should conform to RESTful routes
//
// This is implemented barebones, and could use much refinement.
angular.module('lightCMS.ArticleService', [])
  .factory('Articles', function($http) {
    var article = {};

    // How much should we try to hold on/memoize to data here?
    // Im not sure if we should just always hit the api or what?

    // fetchAll()
    // returns an array of all articles
    // todo:
    //    allow limits in the # returned?
    //    (angular) filters?
    //    better error handling
    article.fetchAll = function(){
      $http.get('/articles')
        .success(function(data, status, headers, config){
          console.log('Recieved: ', data, status, headers, config);
          // TODO: return a promise here?
          return data;
        })
        .error(function(data, status, headers, config){
          console.error(data, status, headers, config);
        });
      };

    // fetchOne()
    // takes an article id as a string
    // returns one article or (null? err? what?)
    article.fetchOne = function(id){
      console.log('Fetching one');
      $http.get('/articles/' + id)
        .success(function(data, status, headers, config){
          console.log('Got one: ',  data, status, headers, config);
          return data;
        })
        .error(function(data, status, headers, config){
          console.error(data, status, headers, config);
        });
    };

    // create()
    // takes an article object
    // it should have at least a title and a body property
    article.create = function(article){
      // TODO: do some validation here?
      $http.post('/articles', article)
        .success(function(data) {
          console.log('Successfully posted new article;');
        })
        .error(function(data){
          console.log('Error: ', data);
        });
    };
    // TODO: .put(a.k.a. delete) and delete
    return article;
});
