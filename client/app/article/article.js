// ArticleController
// handles all requests that the Article(s) views/templates might need

angular.module('lightCMS.article', [])
    .controller('ArticleController', function($scope, Articles){

      // this will need some $scope methods for interfacing from the template

      // example:
      // $scope.listArticles = function(){
      //   $scope.articles = Articles.fetchAll()
      // };

      // this is where we need to trigger edit events?

      // use the Articles service for api requests
        // Articles.fetchAll(); -- returns all articles
        // Articles.fetchOne('558b3aecb8506f2f03856194'); -- takes an article id, returns an article
        // Articles.create({title: 'A day in the life.', body: 'Yo ho, a pirates life for me!'});
          // ^ takes an object with at least title and body - creates new article
    });
