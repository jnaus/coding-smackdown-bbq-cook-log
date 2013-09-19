'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('AddCookerLogCtrl', ['$scope', '$timeout', '$location', '$routeParams', 'dataService', function ($scope, $timeout, $location, $routeParams,  dataService) {
        $scope.currentLog = null;
        $scope.tempLog = new codingsmackdown.CookerLog();

        $scope.addNewEvent = function() {
            if(!$routeParams['index']){
                var date = new Date();
                $scope.tempLog.id =  $scope.currentLog.cookerLog.length + 1;
                $scope.tempLog.dateTime = date.toLocaleString();
                $scope.currentLog.cookerLog.push($scope.tempLog);
            }
            dataService.saveCookLog();
            $location.path('/cooklog/' + $scope.currentLog.id);
        };

        $scope.init = function(){
            if($routeParams['id']){
                $scope.currentLog = dataService.getCookLog($routeParams['id']);
                if(!$scope.currentLog.cookerLog){
                    $scope.currentLog.cookerLog = [];
                } else {
                    if($routeParams['index']){
                        for(var i = 0; i < $scope.currentLog.cookerLog.length; i++ ){
                            if(i == $routeParams['index']){
                                $scope.tempLog = $scope.currentLog.cookerLog[i];
                            }
                        }
                    }
                }
            }
        };

        $scope.init();
    }]);