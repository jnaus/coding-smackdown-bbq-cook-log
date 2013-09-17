'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('AddEventCtrl', ['$scope', '$timeout', '$location', 'DataService', function ($scope, $timeout, $location, DataService) {
        $scope.dt = new Date();
        $scope.showWeeks = false;
        $scope.startDateOpened = false;
        $scope.endDateOpened = false;
        $scope.currentLog = new codingsmackdown.LogEntry();

        $scope.openStartDate = function() {
            $timeout(function() {
                $scope.startDateOpened = true;
            });
        };

        $scope.openEndDate = function() {
            $timeout(function() {
                $scope.endDateOpened = true;
            });
        };

        $scope.today = function() {
            $scope.dt = new Date();
        };

        $scope.showWeeks = true;

        $scope.toggleWeeks = function () {
            $scope.showWeeks = ! $scope.showWeeks;
        };

        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.dateOptions = {
            'show-weeks': false,
            'year-format': "'yyyy'",
            'starting-day': 0
        };

        $scope.addNewEvent = function() {
            DataService.addEvent($scope.currentLog);
            $location.path('/calendar');
        }
  }]);
