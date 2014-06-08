'use strict';

angular.module('bvbuilderApp')
  .directive('fbComponent', function ($compile) {
    return {
      restrict: 'E',   
      require: 'ngModel',      
      link: function (scope, element, attrs,ngModel) {
        scope.$watch(attrs.ngModel+'.template', function(template){
        	var view;
            if (!template) {
              return;
            };
            view = $compile(template)(scope);
            return element.append(view);
        });
      }
    };
  });
