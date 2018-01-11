'use strict';

/**
 * @ngdoc function
 * @name volvoTrucksApp.controller:AddnewCtrl
 * @description
 * # AddnewCtrl
 * Controller of the volvoTrucksApp
 */
angular.module('volvoTrucksApp')
  .controller('AddnewCtrl', function (Parts,$location,$scope) {
    var app = this;
    app.addProduct = function(){
    	app.success_msg="";
    	app.error_msg="";
    	if(app.selectedItem.Price <1){
    	  		app.error_msg="We do not sell products for free. Please enter correct price."
    	  		$scope.addForm.price.$invalid = true;
    	  		$scope.addForm.price.$pristine = false;
    	}else{


		    	var newProduct = app.selectedItem;
		    	var allProducts = Parts.getData();
		    	 for(var i=1;i<allProducts.length;i++){
		                if(allProducts[i].Name === app.selectedItem.Name){
		                    app.error_msg="An item with similar name already exists in our Product list."
		                    return false;
		                 }

           		 }	
		        newProduct.id=parseInt(allProducts.length+1);
		        newProduct.image="images/Capturex.jpg";
				allProducts.push(newProduct);
				Parts.setData(allProducts);
		    	app.success_msg = "New Product added successfully."
   	 }	
    }

    app.cancel = function () {
    	$location.path('/view')
    }
  });
