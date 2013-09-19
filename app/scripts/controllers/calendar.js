'use strict';

angular.module('codingSmackdownBbqCookLogApp')
    .controller('CalendarCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
        /* config object */
        $scope.calendarConfig = {
            height: 450,
            editable: true,
            header: {
                left: 'month basicWeek basicDay',
                center: 'title',
                right: 'today prev,next'
            },
            dayClick: function(date, allDay, jsEvent, view){
                $scope.$apply(function(){
                    $location.path('/add-event/' + date.toISOString());
                });
            },
            eventClick: function (calEvent, jsEvent, view) {
                $scope.$apply(function(){
                    $location.path('/cooklog/' + calEvent.id);
                });
            }
        };

        $scope.myCalendar = null;
        $scope.events = [];
        $scope.eventSources = [];

        $scope.addEvent = function () {
            $location.path('/add-event')
        };

        $scope.init = function () {
            dataService.getCookLogs().then(function (events) {
                $scope.events = angular.copy(events);
                $scope.myCalendar.fullCalendar('removeEvents');
                $scope.myCalendar.fullCalendar('addEventSource', $scope.events);
            });
        };

        $scope.init();
    }]);
