(function() {
  angular.module('app').controller('todosCtrl', function($scope) {
    $scope.todos = [
      'Take out the garbage',
      'Mow the lawn',
      'Be sure to drink your ovaltine'
    ];
  });
})();
