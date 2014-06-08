'use strict';

describe('Service: builder', function() {

  // load the service's module
  var builderProvider;
  var builder;
  beforeEach(module('bvbuilderApp', function(_builderProvider_) {
    builderProvider = _builderProvider_;
  }));

  // instantiate service



  beforeEach(inject(function(_builder_) {
    builder = _builder_;
  }));

  it('should be able to add component', function() {
    expect(!!builderProvider).toBe(true);
    builderProvider.addComponent({
      dummy: 'dummy'
    });
    expect(!!builder).toBe(true);
    expect(builder.components().length).toBe(1);

  });



});