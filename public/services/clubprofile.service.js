'use strict';

angular.module('Clubtree').service('ClubAPI', function ($http, $q, $timeout) {
    this.get = function (id) {
        return $http.get('/clubs/' + id).then(function (response) {
            // TODO need to handle error cases
            return new $q(function (resolve, reject) {
                $timeout(resolve, 1000); // mimic internet latency
            }).then(function () {
                return response.data;
            });
        });
    };
    this.create = function (body) {
        return $http.post('/api/clubprofile', body);
    };
    this.delete = function (id) {
        return $http.delete('/api/clubprofile/' + id);
    };
});
