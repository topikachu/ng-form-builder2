'use strict';

describe('Directive: fbForm', function () {

  // load the directive's module
  beforeEach(module('bvbuilderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fb-form></fb-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fbForm directive');
  }));
});
