'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('AddCookingProcedureLogCtrl', ['$scope', '$timeout', '$location', '$routeParams', 'dataService', function ($scope, $timeout, $location, $routeParams,  dataService) {
        $scope.currentLog = null;

        $scope.addNewEvent = function() {
            dataService.saveCookLog();
            $location.path('/cooklog/' + $scope.currentLog.id);
        };

        $scope.init = function(){
            if($routeParams['id']){
                $scope.currentLog = dataService.getCookLog($routeParams['id']);
                if(!$scope.currentLog.cookingProcedure){
                    $scope.currentLog.cookingProcedure = new codingsmackdown.CookingProcedure();
                    $scope.currentLog.cookingProcedure.id = $scope.currentLog.id;
                    $scope.currentLog.cookingProcedure.date = $scope.currentLog.end;
                }
            }
        };

        $scope.init();
    }]);