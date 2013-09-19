'use strict';

angular.module('codingSmackdownBbqCookLogApp')
    .controller('CooklogCtrl', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
        $scope.cookLog = null;
        $scope.startDate = '';
        $scope.endDate = '';

        $scope.editEvent = function(){
            $location.path('/edit-event/' + $scope.cookLog.id);
        };

        $scope.editWeather = function(){
            $location.path('/add-weather-log/' + $scope.cookLog.id);
        };

        $scope.editPrep = function(){
            $location.path('/add-preparation-log/' + $scope.cookLog.id);
        };

        $scope.editCookingProcedure = function(){
            $location.path('/add-cooking-procedure-log/' + $scope.cookLog.id);
        };

        $scope.addCookEntry = function(){
            $location.path('/add-cooker-log/' + $scope.cookLog.id);
        };

        $scope.editResults = function(){
            $location.path('/add-results-log/' + $scope.cookLog.id);
        };


        $scope.init = function () {
            if ($routeParams['id']) {
                $scope.cookLog = dataService.getCookLog($routeParams['id']);
                if($scope.cookLog){
                    var date = new Date($scope.cookLog.start);
                    $scope.startDate = date.toLocaleDateString();
                    date = new Date($scope.cookLog.end);
                    $scope.endDate = date.toLocaleDateString();
                }
            }
        };

        $scope.init();

    }]);
