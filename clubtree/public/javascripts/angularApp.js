var app = angular.module('ClubTree', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'FrontPage'
      });

      $urlRouterProvider.otherwise('home');
}]);

app.controller('FrontPage', [
  '$scope',
  function($scope) {
    $scope.welcome = 'Find your Clubtree.';
  }
]);
