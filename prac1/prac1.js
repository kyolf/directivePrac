'use strict';

let app1 = angular.module('app1', []);

app1.controller('TodoController', function($scope){
  $scope.todos = {name:'Drinking Oolong Tea', completed: true};
}); 

app1.directive('todoList', function(){
  return {
    templateUrl: 'todo-list.html'
  };
});