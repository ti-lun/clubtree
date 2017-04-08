'use strict';

angular.module('Clubtree').service('ClubAPI', function ($http, $q) {
    this.get = function (id) {
        console.log('you are in service club get');
        // return $http.get('/clubs/' + id);
        return new $q(function (resolve, reject) {
            setTimeout(function () {
                resolve({
                    clubName: 'UCI StarCraft',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida sodales luctus.',
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
                });
            }, 1000);
        });
    };
    this.create = function (body) {
        return $http.post('/api/clubprofile', body);
    };
    this.delete = function (id) {
        return $http.delete('/api/clubprofile/' + id);
    };
});
