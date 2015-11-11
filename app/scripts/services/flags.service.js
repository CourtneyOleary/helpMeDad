angular.module('helpmedadApp')
  .factory('Flags', function($firebaseArray, FirebaseUrl){
    var mainFlagsRef = new Firebase(FirebaseUrl+'mainFlags');
    var userFlagsRef = new Firebase(FirebaseUrl+'userFlags');

    return {
      forMain: function(mainId){
        return $firebaseArray(mainFlagsRef.child(mainId));
      },
      forUsers: function(uid1, uid2){
        var path = uid1 < uid2 ? uid1+'/'+uid2 : uid2+'/'+uid1;

        return $firebaseArray(userFlagsRef.child(path));
      }
    };
  });
