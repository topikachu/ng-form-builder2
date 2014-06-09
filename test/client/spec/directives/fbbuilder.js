'use strict';

describe('Directive: fbBuilder', function () {

  // load the directive's module
  beforeEach(module('bvbuilderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.formObjects=[];
  }));

  it('should render as template', inject(function ($compile) {
    element = angular.element('<fb-builder ng-model="formObjects"></fb-builder>');
    element = $compile(element)(scope);
    expect(element.prop("tagName").toLowerCase()).toBe('div');
    
  }));
});
