'use strict';

/**
 * @ngdoc overview
 * @name volvoTrucksApp
 * @description
 * # volvoTrucksApp
 *
 * Main module of the application.
 */
var app = angular.module('volvoTrucksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'countrySelect'

  ])
  .config(function ($routeProvider,$locationProvider) {
     $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/parts', {
        templateUrl: 'views/parts.html',
        controller: 'PartCtrl',
        controllerAs: 'about'
      })
      .when('/view', {
        templateUrl: 'views/view.html',
        controller: 'ViewCtrl',
        controllerAs: 'view'
      })
      .when('/view/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .when('/addNew', {
        templateUrl: 'views/addnew.html',
        controller: 'AddnewCtrl',
        controllerAs: 'addNew'
      })
      .when('/delete/:id', {
        templateUrl: 'views/delete.html',
        controller: 'deleteCtrl',
        controllerAs: 'delete'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });



  });

app.controller('headerCtrl',function($scope,$location){

    $scope.isActive = function (viewLocation) { 

        return viewLocation === $location.path();
    };


});