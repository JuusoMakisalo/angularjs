(function () {
'use strict';
angular.module('myApp', [])
.controller('myCtrl', function ($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.test = "test 1";
});
})();