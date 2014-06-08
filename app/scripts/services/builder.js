'use strict';

angular.module('bvbuilderApp')
  .provider('builder', function () {



    // Private variables
    var components = [];

    // Private constructor
    function Builder() {
      this.components = function () {
        return components;
      };
    }

    // Public API for configuration
    this.addComponent = function (component) {
      components.push(component);
    };

    // Method for instantiating
    this.$get = function () {
      return new Builder();
    };
  });
