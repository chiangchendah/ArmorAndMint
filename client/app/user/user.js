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
        $scope.hero.theme = $scope.selectedTheme.title;
        console.log(JSON.stringify($scope.hero));
        User.update($scope.hero)
          .then(function(data){
            //console.log('->', data);
            // update our local hero info

            //$scope.hero.email = data.data.email;
            $scope.hero.author = data.data.author;
            $scope.hero.bio = data.data.bio;
            $scope.hero.disqus_shortname = data.data.disqus_shortname;

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

      $scope.changePassword = function() {
        User.changePassword($scope.newPassword, function(err){
          if(err) {
            toastr.error("There was an error changing password", err);
          } else {
            toastr.success("Password changed");
            $scope.newPassword = $scope.newPasswordConfirmation = "";
          }
        });
      };

      $scope.getThemes = function () {
        Themes.fetchAll().then(function(response) {
          console.log(response.data);
          $scope.themes = response.data;
        })
      };

      $scope.getThemes();

      $scope.previewTheme = function () {
        console.log('theme changed to:' + $scope.selectedTheme.title);

        function changeCSS(cssFile) {
          console.log(document.getElementById('dynamiccss'));
          document.getElementById('dynamiccss').setAttribute('href', $scope.selectedTheme.path);
          console.log(document.getElementById('dynamiccss'));
        }
        changeCSS();
      };

});
