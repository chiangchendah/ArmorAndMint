// user controller for interacting with
// the user object in various templates
angular.module('lightCMS.user', [])
    .controller('UserController', function($scope, User, $state){

      // used for storing/updating user profile into
      $scope.user = {};

      // all of these just sort of delegate to the User service
      $scope.update = function() {
        User.update($scope.user)
          .then(function(data){
            $state.go('articles')
          })

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
