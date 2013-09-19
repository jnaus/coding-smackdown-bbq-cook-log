'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('AddResultsLogCtrl', ['$scope', '$timeout', '$location', '$routeParams', 'dataService', function ($scope, $timeout, $location, $routeParams,  dataService) {
        $scope.currentLog = null;

        $scope.addNewEvent = function() {
            dataService.saveCookLog();
            $location.path('/cooklog/' + $scope.currentLog.id);
        };

        $scope.init = function(){
            if($routeParams['id']){
                $scope.currentLog = dataService.getCookLog($routeParams['id']);
                if(!$scope.currentLog.results){
                    $scope.currentLog.results = new codingsmackdown.Results();
                    $scope.currentLog.results.id = $scope.currentLog.id;
                    $scope.currentLog.results.date = $scope.currentLog.end;
                }
            }
        };

        $scope.init();
    }]);