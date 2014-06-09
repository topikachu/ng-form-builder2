'use strict';

angular.module('bvbuilderApp')
  .factory('dndChannel', function () {
    // Service logic
    // ...

   

    // Public API here
    return {
      setSource: function (source) {
        this.source = source;
      },

      getSource:function(){
        return this.source;
      },

      setDragEventOnBuilder:function(e){
        this.e=e;
      },

      getDragEventOnBuilder:function(){
        return this.e;
      },



      reset:function(){
        this.source=null;
        this.e=null;        
      }
    };
  });
