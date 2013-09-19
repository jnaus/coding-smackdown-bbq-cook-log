'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('CookerLogCtrl', ['$scope', '$routeParams', 'dataService', function ($scope, $routeParams, dataService) {
        $scope.cookLog = null;

        $scope.init = function(){
            if($routeParams['id']){
                $scope.cookLog = dataService.getCookLog($routeParams['id']);
            }
        };

        $scope.init();

  }]);
