// user controller for interacting with
// the user object in various templates
angular.module('lightCMS.user', [])
    .controller('UserController', function($scope, User, $state){

      // used for storing/updating user profile into
      $scope.hero = User.hero;

      // all of these just sort of delegate to the User service
      $scope.update = function() {
        // pass our user entered data to the server
        User.update($scope.hero)
          .then(function(data){
            //console.log('->', data);
            // update our local hero info
            $scope.hero.author = data.data.author;
            $scope.hero.bio = data.data.bio;

            // set state to a page reload
            $state.go('articles')
            toastr.success('Bio information updated');

          }, function(error){
            console.log('->', error);
          });

      };

      $scope.isAuthed = function() {
        return User.isAuthed();
      };

      $scope.signin = function() {
        User.signin($scope.user);
      };

      $scope.signout = function() {
        User.signout();
      }
});
