'use strict';

angular.module('backendService', [])
    .factory('ClubProfile', function ($http) {
        return {
            get: function () {
                return Promise.resolve({
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
                })
                // return $http.get('/api/clubprofile');
            },
            create: function (body) {
                return $http.post('/api/clubprofile', body);
            },
            delete: function (id) {
                return $http.delete('/api/clubprofile/' + id);
            }
        }
    });