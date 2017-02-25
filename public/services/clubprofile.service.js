'use strict';

angular.module('ClubTree').service('ClubAPI', function ($http) {
    this.get = function () {
        console.log('you are in service club get');
        return {
            name: 'UCI StarCraft',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida sodales luctus.',
            survey: {
                dateFounded: 2016,
                numberOfMembers: 10,
                meetingLocation: 'No where in particular',
                meetingTime: 'No time in particular'
            },
            personality: {
                values: ''
            },
            members: [],
            organizers: [],
            tags: ['relaxed', 'fun', 'low commitment'],
            category: ''
        };
        // return $http.get('/api/clubprofile');
    };
    this.create = function (body) {
        return $http.post('/api/clubprofile', body);
    };
    this.delete = function (id) {
        return $http.delete('/api/clubprofile/' + id);
    };
});