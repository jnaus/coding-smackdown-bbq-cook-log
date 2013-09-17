'use strict';

describe('Controller: ResultsLogCtrl', function () {

  // load the controller's module
  beforeEach(module('codingSmackdownBbqCookLogApp'));

  var ResultsLogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultsLogCtrl = $controller('ResultsLogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
