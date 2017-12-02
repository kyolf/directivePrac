var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResult", function() {
  return {
    //Best Practice to put as first element
    //E - element
    //A - Attribute
    //C - class
    //M - comments
    restrict: 'EACM',
    template:`
      <a href="#">
        <h4>Doe, John</h4>
        <p>
          555 Main St., New York 12345
        </p>
      </a>`,
    //By default, replace is false
    //When set to true, it replaces the directive 
    //name with the directive's template
    replace: true
  };
});