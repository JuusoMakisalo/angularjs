(function () {
'use strict';

angular.module('myApp', ["ngRoute"])
.controller('myCtrl', function ($scope, $http) {

  $scope.newCount = 0;
  $scope.keyDownEvent=function(){
    $scope.newCount++; 
    console.log("newCount");
}

  $http.get("https://www.w3schools.com/angular/customers_mysql.php")
  .then(function (response) {$scope.names = response.data.records;});
})
.config(function($routeProvider) {
  $routeProvider
  .when("/banana", {
    templateUrl : "myKeyDown.htm"
  })
  .when("/tomato", {
    templateUrl : "myListing.htm"
  })
  .otherwise({
    template : "<h1>None</h1><p>Nothing has been selected</p>"
  })
});



})();
//"count = count + 1"