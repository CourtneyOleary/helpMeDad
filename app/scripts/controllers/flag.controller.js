angular.module('helpmedadApp')
  .controller('FlagCtrl', function($scope, $firebaseArray, Users, Flags, FirebaseUrl){
    var flagCtrl = this;
    flagCtrl.flags = Flags;
    flagCtrl.flag = '';
    var ref = new Firebase(FirebaseUrl+'flags');
    var flags = $firebaseArray(ref)
    var authData = ref.getAuth();

  $scope.sendFlag = function (){
    console.log("hello there mate ", flagCtrl.flags);
    console.log("hello again flags, ", flagCtrl.flags);
    console.log(authData);
    if($scope.flag.length > 0){
      console.log('hi mates :)');

      flagCtrl.flags.$add({
        uid: authData.uid,
        body: $scope.flag,
        timestamp: Firebase.ServerValue.TIMESTAMP,
        coach: ""
      }).then(function (){
        flagCtrl.flag = '';
      });
    };
  };
});
