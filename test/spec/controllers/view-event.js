'use strict';

describe('Controller: ViewEventCtrl', function () {

  // load the controller's module
  beforeEach(module('codingSmackdownBbqCookLogApp'));

  var ViewEventCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewEventCtrl = $controller('ViewEventCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});