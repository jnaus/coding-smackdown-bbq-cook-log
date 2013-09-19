'use strict';

angular.module('codingSmackdownBbqCookLogApp', ['ngRoute', 'ui.bootstrap', 'ui.calendar'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/calendar.html',
                controller: 'CalendarCtrl'
            })
            .when('/calendar', {
                templateUrl: 'views/calendar.html',
                controller: 'CalendarCtrl'
            })
            .when('/cooklog', {
                templateUrl: 'views/cooklog.html',
                controller: 'CooklogCtrl'
            })
            .when('/cooklog/:id', {
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
            .when('/add-event/:date', {
                templateUrl: 'views/add-event.html',
                controller: 'AddEventCtrl'
            })
            .when('/edit-event/:id', {
                templateUrl: 'views/add-event.html',
                controller: 'EditEventCtrl'
            })
            .when('/delete-event/:id', {
                templateUrl: 'views/add-event.html',
                controller: 'DeleteEventCtrl'
            })
            .when('/add-cooking-procedure-log/:id', {
                templateUrl: 'views/add-cooking-procedure-log.html',
                controller: 'AddCookingProcedureLogCtrl'
            })
            .when('/add-preparation-log/:id', {
                templateUrl: 'views/add-preparation-log.html',
                controller: 'AddPreparationLogCtrl'
            })
            .when('/add-weather-log/:id', {
                templateUrl: 'views/add-weather-log.html',
                controller: 'AddWeatherLogCtrl'
            })
            .when('/add-cooker-log/:id', {
                templateUrl: 'views/add-cooker-log.html',
                controller: 'AddCookerLogCtrl'
            })
            .when('/add-cooker-log/:id/:index', {
                templateUrl: 'views/add-cooker-log.html',
                controller: 'AddCookerLogCtrl'
            })
            .when('/add-results-log/:id', {
                templateUrl: 'views/add-results-log.html',
                controller: 'AddResultsLogCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).run(['dataService', function (dataService) {
        dataService.authenticate();
    }]);