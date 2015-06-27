// user controller for interacting with
// the user object in various templates
// doesnt do much right now but pass on the
// shared (mocked out) User service
angular.module('lightCMS.user', [])
    .controller('UserController', function($scope, User){
      $scope.user = User;
});
