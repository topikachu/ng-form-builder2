'use strict';

angular.module('bvbuilderApp')
  .factory('modalService', function ($document,$compile,$rootScope) {
    // Service logic
    // ...

    var template='<div class="modal-background"> </div><modal>test</modal>'

    // Public API here
    return {
      open: function (options) {
      	if (!options){
      		options={
      			scope:$rootScope
      		}
      	}
      	var scope=options.scope||$rootScope;
      	var bodyElem=angular.element($document.find("body"));
      	var modalElem = angular.element($compile(template)(scope));
      	
      	bodyElem.append(modalElem);
		var marginLeft = '-'+modalElem[0].offsetWidth/2+'px';
		var marginTop = '-' + modalElem[0].offsetHeight/2+'px';
		modalElem.css('margin-top', marginTop);
		modalElem.css('margin-left', marginLeft);

        
      }
    };
  });

