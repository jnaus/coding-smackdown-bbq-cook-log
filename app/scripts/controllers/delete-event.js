'use strict';

angular.module('codingSmackdownBbqCookLogApp')
    .controller('DeleteEventCtrl', ['$scope', '$timeout', '$location', '$routeParams', 'dataService', function ($scope, $timeout, $location, $routeParams,  dataService) {
        $scope.init = function(){
            if($routeParams['id']){
                $scope.currentLog = dataService.removeCookLog($routeParams['id']);
                $location.path('/');
            }
        };

        $scope.init();
    }]);
