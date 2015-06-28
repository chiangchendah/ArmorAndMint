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
      })
      // not currently in use
      // register / sign up
      // .state('user/register', {
      //   url: "/user/register",
      //   templateUrl: "app/user/register.html"
      // })
      // // sign in
      .state('signin', {
        url: "/user/signin",
        templateUrl: "app/user/signin.html",
        controller: 'UserController'
      });
      /////////

      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  });

// this gets run once; after config, but before anything else
  // inject some data onto the global object
  // through express rendering, and then check that here
  // and set some state based on it...
    // we might want to load a single article view by id?
    // or start a user off authenticated
app.run(function($rootScope, User, $state){
  console.log('First run?');

  // see if a hero (a.k.a: authenticated user) exists
  try {
    if (HERO){
      console.log('Have user: ', HERO);
      // set our user service to this thing!
      User.data = HERO;

    }
  }
  catch (e) {
    console.error(e);
  }

  // we could set the user data here if the app has embedded it, yeah/ :)
  // console.log(User);
  // console.log($state);

});

