'use strict';

describe('Controller: AddCookingProcedureLogCtrl', function () {

  // load the controller's module
  beforeEach(module('codingSmackdownBbqCookLogApp'));

  var AddCookingProcedureLogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddCookingProcedureLogCtrl = $controller('AddCookingProcedureLogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
