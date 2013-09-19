'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('AddWeatherLogCtrl', ['$scope', '$timeout', '$location', '$routeParams', 'dataService', function ($scope, $timeout, $location, $routeParams,  dataService) {
        $scope.currentLog = null;

        $scope.addNewEvent = function() {
            dataService.saveCookLog();
            $location.path('/cooklog/' + $scope.currentLog.id);
        };

        $scope.init = function(){
            if($routeParams['id']){
                $scope.currentLog = dataService.getCookLog($routeParams['id']);
                if(!$scope.currentLog.weather){
                    $scope.currentLog.weather = new codingsmackdown.Weather();
                    $scope.currentLog.weather.id = $scope.currentLog.id;
                    $scope.currentLog.weather.date = $scope.currentLog.end;
                }
            }
        };

        $scope.init();
    }]);