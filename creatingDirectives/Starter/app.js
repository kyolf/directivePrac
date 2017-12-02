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
  $scope.person = {
    name: "Jack",
    address: "kek kek",
    city: 'lalal',
    state: 'CA',
    zip: '12345' 
  };
  
  $scope.formattedAddress = function (person) {
    return person.address + ', ' + person.city + ', ' + person.state
    + ' ' + person.zip;
  };

    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

//Intent: Reusable objects that does a certain functionality
myApp.directive("searchResult", function() {
  return {
    //Best Practice to put as first element
    //E - element
    //A - Attribute
    //C - class
    //M - comments
    restrict: 'EA',
    templateUrl: 'directives/searchresult.html',
    //By default, replace is false
    //When set to true, it replaces the directive 
    //name with the directive's template
    replace: true,
    scope: {
      //@ means text or string
      //can do personNameSpec: "@personName"
      personName: "@",
      personAddress:"@",
      //= means a 2 way binding on the object or text
      //can affect the scope object that you pass in
      personObject:"=",
      //& means that this prop stores a function
      formattedAddressFunction: "&"
    }
  };
});
