// This is the main file for our ArticleController
// it should handle all requests that the Article(s) views might need

angular.module('lightCMS.article', [])
    .controller('ArticleController', function($scope, Articles){

      // mocks and stubs - delete at will
      $scope.data = {};

      // this will need some $scope methods for calling
      // the Articles service, which will handle the http requests
      Articles.fetchAll();
      Articles.fetchOne('558b3aecb8506f2f03856194');
    });
