'use strict';

/**
 * @ngdoc function
 * @name volvoTrucksApp.controller:deleteCtrl
 * @description
 * # deleteCtrl
 * Controller of the volvoTrucksApp
 */
angular.module('volvoTrucksApp')
  .controller('deleteCtrl', function ($scope,Parts,$routeParams,$location) {
    var app = this;
    // Parts.showAllParts().then(function(data){
	
		var data = Parts.getData();
    		  for(var i=0;i<data.length;i++){
                if(data[i].id == $routeParams.id){
                    app.selectedItem = data[i];
                   
                }
            }

      app.Cancel = function(){
      		$location.path('/view');
      }

      app.deleteProduct = function(){
          	  for(var i=1;i<data.length;i++){
                if(data[i].id == app.selectedItem.id){
                    data.splice(i,1);
                    break;
                 }
            }
   
        Parts.setData(data);
      	$location.path('/view');
      }



  });
