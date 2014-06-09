'use strict';

angular.module('bvbuilderApp')
  .directive('fbFormObjectEdit', function($compile, dndChannel) {
    return {
      restrict: 'E',
      require: 'ngModel',
      template: '<div class="fb-form-object-editable" draggable="true" ng-dblclick="pop()"></div>',
      replace: true,
      controller: function($scope, $element){
        $scope.pop=function(){

        };
      },
      link: function(scope, element, attrs, ngModel) {
        


        scope.$watch(attrs.ngModel + '.template', function(template) {
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