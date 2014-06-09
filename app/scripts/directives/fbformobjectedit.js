'use strict';

angular.module('bvbuilderApp')
  .directive('fbFormObjectEdit', function ($compile,dndChannel) {
    return {
      restrict: 'E',   
      require: 'ngModel',
      template: '<div draggable="true"></div>',
    replace: true,      
      link: function (scope, element, attrs,ngModel) {
      	var builderElement = element.parent().parent();
      	element.on("dragstart",function(e){
      		dndChannel.setSource(ngModel.$modelValue);
      		e.dataTransfer.setData('text', 'node');

      	});
      	element.on("dragend",function(e){
      		var builderEvent=dndChannel.getDragEventOnBuilder();
      		var formObjects=scope.formObjects;
      		if (builderEvent.type=="dragleave"){
      			var formObject=ngModel.$modelValue;
      			var idx = formObjects.indexOf(formObject);
      			if (idx!=-1){
      				formObjects.splice(idx,1);
      			}

      		}else if (builderEvent.type=="dragover"){

      			angular.forEach(builderElement.children(),function(c){
                    	console.log(angular.element(c).prop('outerheight'));
                });
                console.log(e.clientX);
                console.log(e.clientY);
                console.log(builderElement[0].getBoundingClientRect().top);
      		}
      		dndChannel.reset();
      		scope.$apply();
      	});
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
