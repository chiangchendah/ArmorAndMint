// ArticleController
// handles all requests that the Article(s) views/templates might need

angular.module('lightCMS.article', [])
    .controller('ArticleController', function($scope, Articles, User){

      // track our user so we can determine if he has edit rights or not
      $scope.user = User;

      // use this to track which article view we are displaying
      $scope.view = 'list';

      // anytime we fetch a single article we will store it here
      // so the template can access its properties
      $scope.currentArticle = null;

      // Update our list of articles when the controller gets loaded
      // Articles.fetchAll() returns a promise, so we can treat it as such
      Articles.fetchAll()
        .then(
          function(data, status, headers, config){
            //console.log('Recieved: ', data, status, headers, config);
            $scope.articles = data.data;
          },
          function(data, status, headers, config){
            console.error(data, status, headers, config);
          });
      // this will need some $scope methods for interfacing from the template

      // Get the data on and view a single article
      $scope.viewArticle = function(id){
        Articles.fetchOne(id)
          .then(
            function(data, status, headers, config){
              $scope.currentArticle = data.data;
            },
            function(data, status, headers, config){
              console.error(data, status, headers, config);
            });

        $scope.view = 'single';
      };

      // edit a single article
      $scope.editArticle = function(id) {
        Articles.fetchOne(id)
          .then(
            function(data, status, headers, config){
              $scope.currentArticle = data.data;
            },
            function(data, status, headers, config){
              console.error(data, status, headers, config);
            });

        $scope.view = 'edit';
      };

      // use the Articles service for api requests
        // Articles.fetchAll(); -- returns all articles
        // Articles.fetchOne('558b3aecb8506f2f03856194'); -- takes an article id, returns an article
        // Articles.create({title: 'A day in the life.', body: 'Yo ho, a pirates life for me!'});
          // ^ takes an object with at least title and body - creates new article
    });
