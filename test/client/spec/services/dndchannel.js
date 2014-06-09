'use strict';

describe('Service: dndChannel', function () {

  // load the service's module
  beforeEach(module('bvbuilderApp'));

  // instantiate service
  var dndChannel;
  beforeEach(inject(function (_dndChannel_) {
    dndChannel = _dndChannel_;
  }));

  it('should do something', function () {
    expect(!!dndChannel).toBe(true);
    dndChannel.setSource('something');
    expect(dndChannel.getSource()).toBe('something');
  });

});
