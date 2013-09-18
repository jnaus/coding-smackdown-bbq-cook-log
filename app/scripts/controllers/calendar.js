'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('CalendarCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
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

        $scope.events = [];
        $scope.eventSources =  [$scope.events];

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
            dataService.getCookLogs().then(function(events){
                $scope.events = events;
            });
        };

        $scope.init();
  }]);
