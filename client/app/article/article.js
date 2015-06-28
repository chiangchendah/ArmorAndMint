// ArticleController
// handles all requests that the Article(s) views/templates might need

angular.module('lightCMS.article', [])

    // interact with a list of articles
    .controller('ArticlesController', function($scope, Articles, User){

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
    // This may indeed be an abuse of controllers
    // the reason I ended up putting each 'view' in its own controller
    // was because it made sense with the routing at the time.
    // that said... prepare for.. wall of controllers:

    // view one article $stateParams.id is set by ui-router
    .controller('ArticleController', function($scope, Articles, User, $stateParams){
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

    // edit an article
    .controller('EditArticleController', function($scope, Articles, $stateParams){
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

    //  create a new article
    .controller('CreateArticleController', function($scope, Articles, $location){
      $scope.article = {};
      $scope.create = function() {
        Articles.create($scope.article)
          .then(
            function(data){
              // redirect since we know we are good?
              $location.url('articles');
            },
            function(err){
              // alert the user to why we couldnt create the article
              console.error(err);
            }
          );
      };
    });
