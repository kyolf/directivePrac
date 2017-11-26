'use strict';

let app2 = angular.module('app2', []);

app2.controller('TodoController', function($scope){
  $scope.todos = [{name:'Drinking Oolong Tea', completed: true},
                {name:'Making Oolong Tea', completed: false},
                {name:'Help Someone', completed:true},
                {name:'Troll', completed:true}
              ];
});

app2.directive('todoList', function(){
  return{
    templateUrl:'todo.html'
  };
});