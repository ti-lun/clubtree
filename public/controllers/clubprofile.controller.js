'use strict';

angular.module('ClubTree').controller('ClubProfile', [
    '$scope', '$stateParams', 'ClubAPI',
    function ($scope, $stateParams, ClubAPI) {
        console.log('you are inside the controller 2');
        $scope.viewingClubProfile =  ClubAPI.get($stateParams.id).then(function (response) {
            $scope.viewingClubProfile = response;
            $scope.$apply();
        });
    }]);
