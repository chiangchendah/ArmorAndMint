// user controller for interacting with
// the user object in various templates

angular.module('lightCMS.user', ['lightCMS.Services'])
    .controller('UserController', function($scope, User, $state, Themes){
      //error message to display on login error
      $scope.loginStatusMessage = "";
      // used for storing/updating user profile into
      $scope.hero = User.hero;

      $scope.themes = [];

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
            toastr.error('There was an error updating your bio information', err);
          });
      };

      $scope.cancel = function(){
          $state.go("articles");
      };

      $scope.isAuthed = function() {
        return User.isAuthed();
      };

      $scope.signin = function() {
        $scope.loginStatusMessage = "Logging in...";
        User.signin($scope.user, function(err){
          if(err) {
            $scope.loginStatusMessage = err;
          } else {
            $scope.loginStatusMessage = "";
          }
        });
      };

      $scope.signout = function() {
        User.signout();
      };

      $scope.getThemes = function () {
        Themes.fetchAll().then(function(response) {
          console.log(response.data);
          $scope.themes = response.data;
        })
      };

      $scope.getThemes();

});
