// ArticleController
// handles all requests that the Article(s) views/templates might need

angular.module('lightCMS.article', [])
    .controller('ArticlesController', function($scope, Articles, User, $state, $stateParams){

      // track our user so we can determine if he has edit rights or not
      $scope.user = User;

      // Update our list of articles when the controller gets loaded
      // Articles.fetchAll() returns a promise, so we can treat it as such
      Articles.fetchAll()
        .then(
          function(data){
            // console.log('Recieved: ', data);
            $scope.articles = data.data;
          },
          function(data, status, headers, config){
            console.error(data, status, headers, config);
          });
    })
    .controller('ArticleController', function($scope, Articles, User, $state, $stateParams){
      $scope.user = User;
      $scope.currentArticle = {};
      Articles.fetchOne($stateParams.id)
          .then(
            function(data){
              $scope.currentArticle = data.data;
            },
            function(data, status, headers, config){
              console.error(data, status, headers, config);
            });
    })
    .controller('EditArticleController', function($scope, Articles, User, $state, $stateParams){
      $scope.currentArticle = {};
      Articles.fetchOne($stateParams.id)
          .then(
            function(data){
              $scope.currentArticle = data.data;
              console.log(data.data);
            },
            function(data, status, headers, config){
              console.error(data, status, headers, config);
            });
    })
    .controller('CreateArticleController', function($scope, Articles, User, $state, $stateParams){

      $scope.user = User;
      $scope.article = {};

      // create new
      $scope.create = function() {
        console.log('Gotcha');
      };

      // If we are in our articles view and we have an id on our $stateParams
      // if ($scope.view === 'view'){
      //   console.log('state changed:', $stateParams.id);
      //   if ($stateParams.id){
      //     $scope.fetch($stateParams.id);
      //   }
      // } else if ($scope.view === 'articles.edit') {
      //   if ($stateParams.id){
      //     $scope.editArticle($stateParams.id);
      //   }
      // }
      // use the Articles service for api requests

        // Articles.fetchAll(); -- returns all articles
        // Articles.fetchOne('558b3aecb8506f2f03856194'); -- takes an article id, returns an article
        // Articles.create({title: 'A day in the life.', body: 'Yo ho, a pirates life for me!'});
          // ^ takes an object with at least title and body - creates new article
    });
