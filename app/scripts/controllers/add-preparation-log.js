'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('AddPreparationLogCtrl', ['$scope', '$timeout', '$location', '$routeParams', 'dataService', function ($scope, $timeout, $location, $routeParams,  dataService) {
        $scope.currentLog = null;

        $scope.addNewEvent = function() {
            dataService.saveCookLog();
            $location.path('/cooklog/' + $scope.currentLog.id);
        };

        $scope.init = function(){
            if($routeParams['id']){
                $scope.currentLog = dataService.getCookLog($routeParams['id']);
                if(!$scope.currentLog.preparation){
                    $scope.currentLog.preparation = new codingsmackdown.Preparation();
                    $scope.currentLog.preparation.id = $scope.currentLog.id;
                    $scope.currentLog.preparation.date = $scope.currentLog.start;
                }
            }
        };

        $scope.init();
    }]);