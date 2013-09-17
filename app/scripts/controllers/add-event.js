'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('AddEventCtrl', function ($scope, $timeout) {
        $scope.startDateOpened = false;
        $scope.endDateOpened = false;
        $scope.currentLog = new codingsmackdown.Log();

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

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function() {
            $scope.minDate = ( $scope.minDate ) ? null : new Date();
        };
        $scope.toggleMin();

        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 1
        };
  });