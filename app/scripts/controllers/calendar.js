'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('CalendarCtrl', ['$scope', '$location', 'DataService', function ($scope, $location, DataService) {
        /* config object */
        $scope.uiConfig = {
            calendar:{
                height: 450,
                editable: true,
                header:{
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                dayClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };

        $scope.eventSources =  [];

        $scope.alertEventOnClick = function(){

        };

        $scope.alertOnDrop = function() {

        };

        $scope.alertOnResize = function(){

        };

        $scope.addEvent = function() {
            $location.path('/add-event')
        };

        $scope.init = function() {
            var events = DataService.getCookLogs();
            $scope.eventSources = [events];
        };

        $scope.init();
  }]);
