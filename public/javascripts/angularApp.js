// var app = angular.module('ClubTree', ['ui.router']);
var app = angular.module('ClubTree', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'FrontPage'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/login.html',
        controller: 'FrontPage'
      });

      $urlRouterProvider.otherwise('home');
}])
.controller('FrontPage', [
  '$scope',
  function($scope) {
    $scope.welcome = 'Find your Clubtree.';
  }
]);
