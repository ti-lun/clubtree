'use strict';

angular.module('ClubTree').controller('ClubProfile', [
    '$scope',
    function ($scope) {
        console.log('you are inside the controller 2');
        $scope.temp = 'three';
        $scope.viewingClubProfile = {
            name: 'UCI Starcraft',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida sodales luctus.',
            survey: {
                dateFounded: 2016,
                numberOfMembers: 10,
                meetingLocation: 'No where in particular',
                meetingTime: 'No time in particular'
            },
            members: [],
            organizers: [],
            tags: ['relaxed', 'fun', 'low commitment'],
            category: ''
        };
    }]);
