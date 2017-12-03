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
    },
    //Expects its value to be a function
    //Compiles 1 time
    //Compiles what is in the templateUrl or template
    
    //Compile means that I can change my directive on the fly
    //before it gets used
    compile: function(elem, attrs) {
      console.log('Compiling');

      //removes the class attribute
      //elem.removeAttr('class');

      //allows me to see whats inside the root tag of the directive
      console.log(elem.html());
      return {
        //Two properties: pre for prelinking and post for post linking
        
        //Link is run everytime the directive is used

        //These functions get called however many times you ng-repeat it
        //because each time you call it, the directives will
        //have a unique isolated scope

        //Compiles the directive, then runs pre-link
        //After that, find any other directive inside this directive
        //and compiles it and runs pre-link. Does this cycle until it
        //hits the bottom
        //Once it hits the bottom, it runs post-link back up the cycle
        
        //Post-link is safer than pre-link because you know what you 
        //need to deal with.
        pre: function(scope, element, attrs){
          console.log('Pre-linking');
          console.log(element);
        },
        post: function(scope, element, attrs){
          console.log('Post-linking');
          console.log(element);
        }
      };
    },
  };
});
