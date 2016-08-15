/* global angular */

(function() {
  angular.module('app').controller('todosCtrl', function($scope) {
    $scope.todos = [
      'Take out the garbage',
      'Mow the lawn',
      'Be sure to drink your ovaltine'
    ];

    $scope.addTodo = function(inputTodo) {
      if (inputTodo !== '') {
        $scope.todos.push(inputTodo);
        $scope.newTodo = '';
      }
    };

    $scope.completeTask = function(inputIndex) {
      $scope.todos.splice(inputIndex, 1);
    };
  });
})();
