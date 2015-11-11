'use strict';

/**
 * @ngdoc function
 * @name helpmedadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helpmedadApp
 */
angular.module('helpmedadApp')
  .controller('MainCtrl', function($state, $firebaseArray, FirebaseUrl, Auth, Users, Flags){
    var MainCtrl = this;
    var refFlags = new Firebase(FirebaseUrl+'flags');
    // var refUsers = new Firebase(FirebaseUrl+'Users');
    var flags = $firebaseArray(refFlags);
    // var users = $firebaseArray(refUsers);


    MainCtrl.users = Users.all;
    MainCtrl.flags = Flags;

    //MainCtrl.profile = profile;
    //MainCtrl.main = main;
    MainCtrl.getDisplayName = Users.getDisplayName;
    //MainCtrl.getGravatar = Users.getGravatar;

    //Users.setOnline(profile.$id);

    MainCtrl.logout = function(){
      MainCtrl.profile.online = null;
      MainCtrl.profile.$save().then(function(){
        Auth.$unauth();
        $state.go('logout');
      });
    };

  });
