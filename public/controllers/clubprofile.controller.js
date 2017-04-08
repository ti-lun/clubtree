'use strict';

angular.module('Clubtree').controller('ClubProfile', [
    '$scope',
    '$stateParams',
    'ClubAPI',
    function ($scope, $stateParams, ClubAPI) {
        ClubAPI.get($stateParams.id).then(function (response) {
            $scope.viewingClubProfile = response;
        });
    }]);
