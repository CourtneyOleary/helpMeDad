'use strict';

/**
 * @ngdoc function
 * @name helpmedadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helpmedadApp
 */
angular.module('helpmedadApp')
  .controller('MainCtrl', function($state, Auth, Users, profile, main){
    var MainCtrl = this;
    MainCtrl.users = Users.all;

    MainCtrl.profile = profile;
    MainCtrl.main = main;
    MainCtrl.getDisplayName = Users.getDisplayName;
    MainCtrl.getGravatar = Users.getGravatar;

    Users.setOnline(profile.$id);

    MainCtrl.logout = function(){
      MainCtrl.profile.online = null;
      MainCtrl.profile.$save().then(function(){
        Auth.$unauth();
        $state.go('home');
      });
    };

  });
