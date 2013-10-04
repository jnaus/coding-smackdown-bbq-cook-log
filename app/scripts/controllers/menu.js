'use strict';

angular.module('codingSmackdownBbqCookLogApp')
  .controller('MenuCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.linkAccount = function(){
            dataService.authenticate();
        }
  }]);
