angular.module('Clubtree', ['ui.router']).config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

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
            })
            .state('clubprofile', {
                url: "/clubprofile/:id",
                templateUrl: '../views/clubprofile.view.html',
                controller: 'ClubProfile'
            })
            .state('joinus', {
                url: "/joinus",
                templateUrl: '../views/joinus.view.html',
                controller: 'JoinUs'
            });

        $urlRouterProvider.otherwise('home');

    }]);
