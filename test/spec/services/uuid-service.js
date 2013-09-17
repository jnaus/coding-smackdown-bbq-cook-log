'use strict';

describe('Service: uuidService', function () {

  // load the service's module
  beforeEach(module('codingSmackdownBbqCookLogApp'));

  // instantiate service
  var uuidService;
  beforeEach(inject(function (_uuidService_) {
    uuidService = _uuidService_;
  }));

  it('should do something', function () {
    expect(!!uuidService).toBe(true);
  });

});
