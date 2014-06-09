'use strict';

angular.module('bvbuilderApp')
  .directive('fbComponent', function ($compile) {
    return {
      restrict: 'E',   
      scope:{
        component:'=ngModel'
      } ,
      template: '<div draggable="true" class="fb-component" ><div class="fb-form-object-editable-modal"></div></div>',
    replace: true,      
      link: function (scope, element, attrs) {
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
