'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('MainCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.cookLogs = [];
        $scope.todayEvents = [];

        $scope.init = function(){
            $scope.cookLogs = dataService.getCookLogs();

        }

        $scope.init();
  }]);
