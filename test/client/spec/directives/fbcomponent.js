'use strict';

describe('Directive: fbComponent', function () {

  // load the directive's module
  beforeEach(module('bvbuilderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.component={};
  }));

  it('should make render as template', inject(function ($compile) {
    element = angular.element('<fb-component ng-model="component"></fb-component>');
    element = $compile(element)(scope);
    scope.component={
      template:'<div>hello</div><div>hello2</div>'
    };
    scope.$apply();
    expect(element.find('div').length).toBe(2);

    expect(angular.element(element.find('div')[0]).text()).toBe('hello');
    expect(angular.element(element.find('div')[1]).text()).toBe('hello2');

  }));
});
