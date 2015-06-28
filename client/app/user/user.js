// user controller for interacting with
// the user object in various templates
// doesnt do much right now but pass on the
// shared (mocked out) User service
angular.module('lightCMS.user', [])
    .controller('UserController', function($scope, User){

      $scope.isAuthed = function() {
        return User.isAuthed();
      };

      $scope.signin = function() {
        console.log($scope.user);
        User.signin($scope.user);
      };

      $scope.signout = function() {
        User.signout();
      }
});
