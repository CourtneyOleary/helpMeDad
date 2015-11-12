angular.module('helpmedadApp')
  .controller('AuthCtrl', function($state, $scope, $rootScope, Auth, $firebaseAuth, $firebaseObject, FirebaseUrl, md5) {
    var authCtrl = this;
    var ref = new Firebase(FirebaseUrl+'users');

    profiles = $firebaseAuth(ref);

    $scope.newUser = {
      email: '',
      password: '',
      displayName: ''
    };

    authCtrl.login = function (){
      Auth.$authWithPassword(authCtrl.user).then(function (auth){
        $state.go('root');
      }, function (error){
        authCtrl.error = error;
      });
    };

    authCtrl.register = function () {
      Auth.$createUser({email: $scope.newUser.email, password: $scope.newUser.password}).then(function(auth) {
        return createProfile(auth, $scope.newUser);
      }, function (error){
        $scope.error = error;
      });
    };

    function createProfile(auth, newUser){
      $rootScope.uid = auth.uid;
      var theRef = new Firebase(FirebaseUrl + '/users/' + auth.uid)
      var profileRef = $firebaseObject(theRef);
      profileRef.displayName = newUser.displayName;
      profileRef.emailHash = md5.createHash(newUser.email);
      profileRef.$save();
      // profileRef.$add({uid: auth.uid, displayName: newUser.displayName, emailHash: md5.createHash(newUser.email)});
      $state.go('root');

    };

  });
