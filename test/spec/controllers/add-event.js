'use strict';

describe('Controller: AddEventCtrl', function () {

  // load the controller's module
  beforeEach(module('codingSmackdownBbqCookLogApp'));

  var AddEventCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddEventCtrl = $controller('AddEventCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
