var app = angular.module('lightCMS', ['ui.router', 'lightCMS.article', 'lightCMS.ArticleService'])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("articles");
    //
    // Now set up the states
    $stateProvider
      // single article view state/route
      .state('article', {
        url: "/article",
        templateUrl: "app/article/article.html",
        controller: 'ArticleController'
      })
      // multiple article view state
      .state('articles', {
        url: "/articles",
        templateUrl: "app/article/article-list.html",
        controller: 'ArticleController'
      })
      // register / sign up view
      .state('user/register', {
        url: "/user/register",
        templateUrl: "app/user/register.html"
      })
      // sign in view
      .state('user/signin', {
        url: "/user/signin",
        templateUrl: "app/user/signin.html"
      });
  });



