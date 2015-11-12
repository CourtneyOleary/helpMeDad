angular.module('helpmedadApp')
  .controller('AuthCtrl', function($scope, Auth, $firebaseAuth, $firebaseArray, FirebaseUrl, md5) {
    var authCtrl = this;
    var ref = new Firebase(FirebaseUrl+'profiles');
    profiles = $firebaseAuth(ref);

    $scope.newUser = {
      email: '',
      password: '',
      displayName: ''
    };

    authCtrl.register = function () {
      Auth.$createUser({email: $scope.newUser.email, password: $scope.newUser.password}).then(function(auth) {
        return createProfile(auth, $scope.newUser);
      }, function (error){
        $scope.error = error;
      });
    };

    function createProfile(auth, newUser){
      console.log(auth);
      console.log(newUser)
      var profileRef = $firebaseArray(ref);
      console.log(auth.uid);
      return profileRef.$add({uid: auth.uid, displayName: newUser.displayName, emailHash: md5.createHash(newUser.email)});
    };

  });
