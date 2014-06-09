'use strict';

angular.module('bvbuilderApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.component={
    	template:'<div>hello</div><div>hello2</div>'
    }

    $scope.formObjects=[
    {
    	template:'<div>hello</div>'
    },
    {
    	template:'<div>hello2</div>'
    },
    {
    	template:'<div>hello3</div>'
    }
    ];

  });
