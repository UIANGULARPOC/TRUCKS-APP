'use strict';

/**
 * @ngdoc function
 * @name volvoTrucksApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the volvoTrucksApp
 */
angular.module('volvoTrucksApp')
  .controller('ProductCtrl', function ($scope,Parts,$routeParams,$location) {
    var app = this;
   // Parts.showAllParts().then(function(data){
	var data = Parts.getData();

    		  for(var i=0;i<data.length;i++){
                if(data[i].id == $routeParams.id){
                    app.selectedItem = data[i];
              }
            }

    	//});

    app.editProduct = function () {
    	$scope.success_msg="";
    	$scope.error_msg="";
    	  if(app.selectedItem.Price <1){
    	  		$scope.error_msg="We do not sell products for free. Please enter correct price."
    	  		$scope.editForm.price.$invalid = true;
    	  		$scope.editForm.price.$pristine = false;
    	  }else{
    	  for(var i=0;i<data.length;i++){
                if(data[i].id == app.selectedItem.id){
                    data[i] = app.selectedItem;
                    break;
                   
                }
            }
        
       		Parts.setData(data);
    		$scope.success_msg="Product details updated successfully."
    	}
     }

     app.cancel = function (){
     	$location.path('/view')
     }
    	
  });