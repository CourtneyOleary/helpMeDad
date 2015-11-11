angular.module('helpmedadApp')
  .factory('Flags', function($firebaseArray, FirebaseUrl){
    var ref = new Firebase(FirebaseUrl+'flags');
    var flags = $firebaseArray(ref);

    return flags;
  });
