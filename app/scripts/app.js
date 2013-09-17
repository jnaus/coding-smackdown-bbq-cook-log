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
      .when('/add-event', {
        templateUrl: 'views/add-event.html',
        controller: 'AddEventCtrl'
      })
      .when('/preparation-log', {
        templateUrl: 'views/preparation-log.html',
        controller: 'PreparationLogCtrl'
      })
      .when('/weather-log', {
        templateUrl: 'views/weather-log.html',
        controller: 'WeatherLogCtrl'
      })
      .when('/cooker-log', {
        templateUrl: 'views/cooker-log.html',
        controller: 'CookerLogCtrl'
      })
      .when('/results-log', {
        templateUrl: 'views/results-log.html',
        controller: 'ResultsLogCtrl'
      })
      .when('/view-event', {
        templateUrl: 'views/view-event.html',
        controller: 'ViewEventCtrl'
      })
      .when('/view-preperation', {
        templateUrl: 'views/view-preperation.html',
        controller: 'ViewPreperationCtrl'
      })
      .when('/cooking-procedure-log', {
        templateUrl: 'views/cooking-procedure-log.html',
        controller: 'CookingProcedureLogCtrl'
      })
      .when('/view-cooking-procedure', {
        templateUrl: 'views/view-cooking-procedure.html',
        controller: 'ViewCookingProcedureCtrl'
      })
      .when('/view-weather', {
        templateUrl: 'views/view-weather.html',
        controller: 'ViewWeatherCtrl'
      })
      .when('/view-cooker-log', {
        templateUrl: 'views/view-cooker-log.html',
        controller: 'ViewCookerLogCtrl'
      })
      .when('/view-results-log', {
        templateUrl: 'views/view-results-log.html',
        controller: 'ViewResultsLogCtrl'
      })
      .when('/view-preperation-log', {
        templateUrl: 'views/view-preperation-log.html',
        controller: 'ViewPreperationLogCtrl'
      })
      .when('/view-cooking-procedure-log', {
        templateUrl: 'views/view-cooking-procedure-log.html',
        controller: 'ViewCookingProcedureLogCtrl'
      })
      .when('/add-cooking-procedure-log', {
        templateUrl: 'views/add-cooking-procedure-log.html',
        controller: 'AddCookingProcedureLogCtrl'
      })
      .when('/add-preparation-log', {
        templateUrl: 'views/add-preparation-log.html',
        controller: 'AddPreparationLogCtrl'
      })
      .when('/add-weather-log', {
        templateUrl: 'views/add-weather-log.html',
        controller: 'AddWeatherLogCtrl'
      })
      .when('/add-cooker-log', {
        templateUrl: 'views/add-cooker-log.html',
        controller: 'AddCookerLogCtrl'
      })
      .when('/add-results-log', {
        templateUrl: 'views/add-results-log.html',
        controller: 'AddResultsLogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
