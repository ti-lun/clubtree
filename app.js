var app = angular.module('ClubTree', []);

app.controller('FrontPage', [
  '$scope',
  function($scope) {
    $scope.test = 'Hello World!';
  }
]);
