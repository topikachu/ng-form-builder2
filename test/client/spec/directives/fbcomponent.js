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

  it('should render as template', inject(function ($compile) {
    element = angular.element('<fb-component ng-model="component"></fb-component>');
    element = $compile(element)(scope);
    scope.component={
      template:'<div>hello</div><div>hello2</div>'
    };
    scope.$apply();
    expect(element.prop("tagName").toLowerCase()).toBe('div');
    
    var children=element.children();
    expect(children.length).toBe(2);

    expect(angular.element(children[0]).text()).toBe('hello');
    expect(angular.element(children[1]).text()).toBe('hello2');

  }));
});
