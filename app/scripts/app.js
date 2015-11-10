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
      .state('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
      // .otherwise({
      //   redirectTo: '/'
      // });
  })

   .constant('FirebaseUrl', 'https://helpmedad.firebaseio.com/');
