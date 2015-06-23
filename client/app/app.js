var app = angular.module('lightCMS', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('article', {
        url: "/article",
        templateUrl: "app/article/article.html"
      })
      .state('article/list', {
        url: "/article/list",
        templateUrl: "app/article/article-list.html",
        controller: function($scope) {
          $scope.items = ["A", "List", "Of", "Items"];
        }
      })
      .state('user/register', {
        url: "/user/register",
        templateUrl: "app/user/register.html"
      })
      .state('user/signin', {
        url: "/user/signin",
        templateUrl: "app/user/signin.html"
      });

      // .state('state2.list', {
      //   url: "/list",
      //   templateUrl: "partials/state2.list.html",
      //   controller: function($scope) {
      //     $scope.things = ["A", "Set", "Of", "Things"];
      //   }
      // });
  });



app.controller('testCtrl', function($scope){
  $scope.testVar = 1;
});
