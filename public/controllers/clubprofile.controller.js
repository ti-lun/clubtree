'use strict';

angular.module('Clubtree').controller('ClubProfile', [
    '$scope',
    'ClubAPI',
    function ($scope, ClubAPI) {
        console.log('you are inside the controller 2');
        $scope.viewingClubProfile =  ClubAPI.get($stateParams.id).then(function (response) {
            $scope.viewingClubProfile = response;
            $scope.$apply();
        });
    }]);
