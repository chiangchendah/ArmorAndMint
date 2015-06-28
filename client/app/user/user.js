// user controller for interacting with
// the user object in various templates
angular.module('lightCMS.user', [])
    .controller('UserController', function($scope, User){

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
