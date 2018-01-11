'use strict';

/**
 * @ngdoc function
 * @name volvoTrucksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the volvoTrucksApp
 */
angular.module('volvoTrucksApp')
  .controller('PartCtrl', function ($scope,Parts,$window) {
    	Parts.showAllParts().then(function(data){
    		//$scope.allParts = data;
    		// $window.localStorage.setItem("allProducts", JSON.stringify(data));
    		//Parts.setData(data);
    		if(Parts.getData() == {}){
    			Parts.setData(data);
    		}


				    	
    	});

    	$scope.allParts = JSON.parse($window.localStorage.getItem("allProducts") || "[]");
    		//console.log($scope.allParts)
    	
  });
