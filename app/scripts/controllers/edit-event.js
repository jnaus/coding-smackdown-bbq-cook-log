'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('EditEventCtrl', ['$scope', '$timeout', '$location', '$routeParams', 'dataService', function ($scope, $timeout, $location, $routeParams,  dataService) {
        $scope.dt = new Date();
        $scope.showWeeks = false;
        $scope.startDate = new Date();
        $scope.startDateOpened = false;
        $scope.endDate = new Date();
        $scope.endDateOpened = false;
        $scope.currentLog = null;

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
            dataService.saveCookLog();
            $location.path('/cooklog/' + $scope.currentLog.id);
        };

        $scope.init = function(){
            if($routeParams['id']){
                $scope.currentLog = dataService.getCookLog($routeParams['id']);
                $scope.startDate = new Date($scope.currentLog.start);
                $scope.endDate = new Date($scope.currentLog.end);
            }
        };

        $scope.init();
  }]);
