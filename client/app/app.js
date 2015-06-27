var app = angular.module('lightCMS', ['ui.router', 'lightCMS.article', 'lightCMS.ArticleService'])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("articles");
    //
    // Now set up the states
    $stateProvider
      // articles
      .state('articles', {
        url: "/articles",
        templateUrl: "app/article/article.html",
        controller: 'ArticleController'
      })
      // register / sign up
      .state('user/register', {
        url: "/user/register",
        templateUrl: "app/user/register.html"
      })
      // sign in
      .state('user/signin', {
        url: "/user/signin",
        templateUrl: "app/user/signin.html"
      });
  });
