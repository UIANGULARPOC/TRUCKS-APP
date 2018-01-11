'use strict';

/**
 * @ngdoc function
 * @name volvoTrucksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the volvoTrucksApp
 */
angular.module('volvoTrucksApp')
  .controller('MainCtrl', function ($location) {

    var app = this;

    app.partsCatalogue =function () {
    	$location.path("/parts");
    }
  });
