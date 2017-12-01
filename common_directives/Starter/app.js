var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
  $scope.handleUpper = function () {
    return $filter('uppercase')($scope.handle);
  };  

  $scope.characters = 5;
}]);
