'use strict';

describe('Directive: fbFormObjectEdit', function () {

  // load the directive's module
  beforeEach(module('bvbuilderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.formObject={};
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fb-form-object-edit ng-model="formObject"></fb-form-object-edit>');
    element = $compile(element)(scope);
    expect(element.prop("tagName").toLowerCase()).toBe('div');
    
  }));
});
