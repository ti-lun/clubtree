'use strict';

angular.module('ClubTree')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('clubprofile', {
                    url: "/clubprofile/:id",
                    templateUrl: '../views/clubprofile.view.html',
                    controller: 'ClubProfile'
                });
        }])
    .controller('ClubProfile', ['$scope', function ($scope) {
        $scope.viewingClubProfile;
        console.log('you are inside the controller');
    }]);
