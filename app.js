(function () {
'use strict';

angular.module('myApp', [])
.controller('myCtrl', function ($scope, $http) {
  $http.get("https://www.w3schools.com/angular/customers_mysql.php")
  .then(function (response) {$scope.names = response.data.records;});
});

})();