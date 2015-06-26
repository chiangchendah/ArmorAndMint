// services.js
//
// Handles all crud requests for our article element
// server should conform to RESTful routes
angular.module('lightCMS.ArticleService', [])
  .factory('Articles', function($http) {
    var article = {};

    article.fetchAll = function(){
      $http.get('/articles')
        .success(function(data, status, headers, config){
          console.log('Recieved: ', data, status, headers, config);
          return data;
        })
        .error(function(data, status, headers, config){
          console.error(data, status, headers, config);
        });
      };
    article.fetchOne = function(id){
      console.log('Fetching');
      $http.get('/articles/' + id)
        .success(function(data, status, headers, config){
          console.log('Got one: ',  data, status, headers, config);
          return data;
        })
        .error(function(data, status, headers, config){
          console.error(data, status, headers, config);
        });
    };
    article.create = function(article){
      // do some validation here?
      $http.post('/articles', data)
        .success(function(data) {
          console.log('Successfully posted new article;');
        })
        .error(function(data){
          console.log('Error: ', data);
        });
    };

    return article;
});
