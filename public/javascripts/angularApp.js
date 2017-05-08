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

    }])

    .run(['$rootScope', '$window', function($rootScope, $window) {

        $rootScope.user = {};

        $window.fbAsyncInit = function() {
        // Executed when the SDK is loaded
        FB.init({
            appId: '{app-id}',
            /*
            Adding a Channel File improves the performance
            of the javascript SDK, by addressing issues
            with cross-domain communication in certain browsers.
            */
            channelUrl: 'app/channel.html',
            status: true,
            cookie: true,
            xfbml: true
        });
    };

    (function(d){
    // load the Facebook javascript SDK
    var js,
    id = 'facebook-jssdk',
    ref = d.getElementsByTagName('script')[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";

    ref.parentNode.insertBefore(js, ref);

    }(document));

}]);
