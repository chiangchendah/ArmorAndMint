// services.js
//
// Handles all crud requests for our article element
// server should conform to RESTful routes
angular.module('lightCMS.ArticleService', [])
  .factory('Articles', function($http) {
    var fetchAll = function(){
      $http.get('/articles')
        .success(function(data, status, headers, config){
          console.log('Recieved: ', data, status, headers, config);
          return data;
        })
        .error(function(data, status, headers, config){
          console.error(data, status, headers, config);
        });
      };
    var fetchOne = function(id){
      console.log('Fetching');
      $http.get('/articles/' + id)
        .success(function(data, status, headers, config){
          console.log('Got one: ',  data, status, headers, config);
          return data;
        })
        .error(function(data, status, headers, config){
          console.error(data, status, headers, config);
        });
    }
    // setup crud methods for articles

    return {
      fetchAll: fetchAll,
      fetchOne: fetchOne
    };
});
