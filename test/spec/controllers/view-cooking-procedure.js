'use strict';

describe('Controller: ViewCookingProcedureCtrl', function () {

  // load the controller's module
  beforeEach(module('codingSmackdownBbqCookLogApp'));

  var ViewCookingProcedureCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewCookingProcedureCtrl = $controller('ViewCookingProcedureCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
