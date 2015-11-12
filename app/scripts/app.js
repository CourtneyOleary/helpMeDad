'use strict';

/**
 * @ngdoc overview
 * @name helpmedadApp
 * @description
 * # helpmedadApp
 *
 * Main module of the application.
 */
angular
  .module('helpmedadApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'angular-md5',
    'ui.router'

  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as MainCtrl',
        controllerAs: 'main'
      })
      .state('login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl as authCtrl',
        controllerAs: 'auth'
      })
      .state('register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl as authCtrl',
        controllerAs: 'auth'
      })
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as MainCtrl',
        controllerAs: 'main'
      })
      .state('profile', {
        url: '/',
        controller: 'ProfileCtrl as profileCtrl',
        templateUrl: 'views/profile.html',
        resolve: {
          auth: function($state, Users, Auth){
            return Auth.$requireAuth().catch(function(){
              $state.go('root');
            });
          },
          profile: function(Users, Auth){
            return Auth.$requireAuth().then(function(auth){
              return Users.getProfile(auth.uid).$loaded();
            });
          }
        }
      })
      .state('logout', {
        url: '/',
        templateUrl: 'views/logout.html',
        controller: 'MainCtrl as MainCtrl',
        controllerAs: 'main',
      });
  })

   .constant('FirebaseUrl', 'https://helpmedad.firebaseio.com/');
