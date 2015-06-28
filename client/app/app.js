var app = angular.module('lightCMS', [
  'ui.router',
  'lightCMS.user',
  'lightCMS.article',
  'lightCMS.Services'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    //
    // For any unmatched url
      // redirect to "articles"
    $urlRouterProvider.otherwise("articles");

    // set up the states
    // these have the url to our partial/template
    // as well as the controller to use when rendering that view
    // see: https://github.com/angular-ui/ui-router
    $stateProvider
      .state('articles', {
        url: "/articles",
        templateUrl: "app/article/list.html",
        controller: 'ArticlesController'
      })
      .state('view', {
        url: "/articles/:id",
        templateUrl: "app/article/article.html",
        controller: 'ArticleController'
      })
      .state('create', {
        url: "/create",
        templateUrl: "app/article/create.html",
        controller: 'CreateArticleController'
      })
      .state('edit', {
        url: "/edit/:id",
        templateUrl: "app/article/edit.html",
        controller: 'ArticleController'
      });
      // not currently in use
      // register / sign up
      // .state('user/register', {
      //   url: "/user/register",
      //   templateUrl: "app/user/register.html"
      // })
      // // sign in
      // .state('user/signin', {
      //   url: "/user/signin",
      //   templateUrl: "app/user/signin.html"
      // });
      /////////

      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  });
