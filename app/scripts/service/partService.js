'use strict';
 angular.module('volvoTrucksApp')


.factory('Parts',['$http', '$window',function($http,$window){
    var allParts = []; //Private Variable
    
    var showAllParts = function(){ 
            return $http.get("scripts/service/data.js").then(function(response){
                allParts = response.data;
                return response.data;
            });
        } ;

    var getData = function () {
        return JSON.parse($window.localStorage.getItem("allProducts") || "[]");
    }  

    var setData = function (data){

        return $window.localStorage.setItem("allProducts", JSON.stringify(data));
    }

    return {
        showAllParts: showAllParts,
        getData : getData,
        setData : setData
    }
}]);
