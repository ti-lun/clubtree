angular.module('Clubtree', ['ui.router']).config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    header: {
                        templateUrl: '../views/loggedout.header.html',
                    },
                    body: {
                        templateUrl: '../views/home.body.html',
                        controller: 'FrontPage'
                    }
                }
            })
            .state('login', {
                url: '/login',
                views: {
                    body: {
                        templateUrl: '/login.html',
                        controller: 'FrontPage'
                    }
                }
            })
            .state('clubprofile', {
                url: "/clubprofile/:id",
                views: {
                    header: {
                        templateUrl: '../views/loggedin.header.html',
                    },
                    body: {
                        templateUrl: '../views/clubprofile.view.html',
                        controller: 'ClubProfile'
                    }
                }
            })
            .state('joinus', {
                url: "/joinus",
                views: {
                    body: {
                        templateUrl: '../views/joinus.view.html',
                        controller: 'JoinUs'
                    }
                }
            })
            .state('loggedin', {
                url: "/loggedin",
                views: {
                    header: {
                        templateUrl: '../views/loggedin.header.html',
                    },
                    body: {
                        templateUrl: '../views/loggedIn.view.html',
                        controller: 'JoinUs'
                    }
                }
            });

        $urlRouterProvider.otherwise('home');

    }]);
