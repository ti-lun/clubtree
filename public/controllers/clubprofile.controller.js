'use strict';

angular.module('Clubtree').controller('ClubProfile', [
    '$scope',
    '$stateParams',
    'ClubAPI',
    function ($scope, $stateParams, ClubAPI) {
        console.log('you are inside the controller 2');
        ClubAPI.get($stateParams.id).then(function (response) {
            $scope.viewingClubProfile = response;
        });
    }]);
