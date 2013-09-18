'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('CalendarCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
        /* config object */
        $scope.uiConfig = {
            calendar:{
                height: 450,
                editable: true,
                header:{
                    left: 'month basicWeek basicDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                buttonIcons:{
                    prev: 'icon icon-prev',
                    next: 'icon icon-next'
                },
                eventClick: $scope.eventClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };

        $scope.myCalendar = null;
        $scope.events = [];
        $scope.eventSources =  [];

        $scope.eventClick = function(calEvent, jsEvent, view) {
            alert('Event: ' + calEvent.title);
            alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
            alert('View: ' + view.name);
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
                $scope.myCalendar.fullCalendar('removeEvents');
                $scope.myCalendar.fullCalendar('addEventSource', $scope.events);
            });
        };

        $scope.init();
  }]);
