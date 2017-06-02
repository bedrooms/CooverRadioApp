'use strict';

/**
 * @ngdoc overview
 * @name cooverRadioApp
 * @description
 * # cooverRadioApp
 *
 * Main module of the application.
 */
angular
  .module('cooverRadioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/radio', {
        templateUrl: 'views/radioview.html',
        controller: 'radioCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
