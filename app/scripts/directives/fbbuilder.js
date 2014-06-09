'use strict';

angular.module('bvbuilderApp')
    .directive('fbBuilder', function(dndChannel) {
        return {
            restrict: 'E',
           
            scope: {
                formObjects: '=ngModel'
            },
            template: '<div class="fb-builder"><div class="fb-form-object-editable" ng-repeat="formObject in formObjects"> <fb-form-object-edit  ng-model="formObject" > <div> </fb-form-object-edit></div>',
            replace: true,
            link: function(scope, element, attrs) {
            	console.log(attrs.ngModel);
            	console.log(scope.formObjects);
                element.on("dragover", function(e) {
                    e.preventDefault()
                    dndChannel.setDragEventOnBuilder(e);
                    
                });
                element.on("dragleave",function(e){
                	dndChannel.setDragEventOnBuilder(e);
                })
            }
        };
    });
