var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
  $scope.handle = '';
  $scope.handleUpper = $filter('uppercase')($scope.handle);
    
    
}]);
