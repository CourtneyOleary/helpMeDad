angular.module('helpmedadApp')
  .factory('Main', function($firebaseArray, FirebaseUrl){
    var ref = new Firebase(FirebaseUrl+'Main');
    var Main = $firebaseArray(ref);

    return Main;
  });
