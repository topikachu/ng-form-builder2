'use strict';

angular.module('bvbuilderApp')
  .directive('fbComponent', function ($compile) {
    return {
      restrict: 'E',   
      require: 'ngModel',
      template: '<div draggable="true"></div>',
    replace: true,      
      link: function (scope, element, attrs,ngModel) {
        element.on('dragstart' ,function(){});
        element.on('dragend' ,function(){});
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
