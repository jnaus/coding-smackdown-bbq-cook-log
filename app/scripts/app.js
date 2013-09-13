'use strict';

angular.module('codingSmackdownBbqCookLogApp', ['ngRoute', 'dropstore-ng', 'ui.bootstrap', 'ui.calendar'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl'
      })
      .when('/cooklog', {
        templateUrl: 'views/cooklog.html',
        controller: 'CooklogCtrl'
      })
      .when('/cooktimer', {
        templateUrl: 'views/cooktimer.html',
        controller: 'CooktimerCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
