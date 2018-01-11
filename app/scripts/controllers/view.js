'use strict';

/**
 * @ngdoc function
 * @name volvoTrucksApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the volvoTrucksApp
 */
angular.module('volvoTrucksApp')
  .controller('ViewCtrl', function ($scope,Parts,$location) {
    // Parts.showAllParts().then(function(data){

    // 		$scope.data = data;

    // 	});
    
    var app = this;
    // $scope.data = JSON.parse($window.localStorage.getItem("allProducts") || "[]");
    $scope.data = Parts.getData();
	

    app.deleteProduct = function(id) {
    		$location.path('/delete/'+id);
    }


    app.editProduct = function(id) {
    		// console.log(argument)
    		$location.path('/view/'+id);
    }

  });
