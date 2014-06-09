'use strict';

angular.module('bvbuilderApp')
  .directive('fbForm', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the fbForm directive');
      }
    };
  });
