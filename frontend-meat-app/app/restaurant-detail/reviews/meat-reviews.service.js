// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').factory('meatReviewsService', meatReviewsService);

    meatReviewsService.$inject = ['$http'];

    function meatReviewsService($http) {
        const backendUrl = 'http://localhost:3001';

        return {
            reviews
        };

        function reviews(search = '') {
            return $http.get(`${backendUrl}/reviews?q=${search}`);
        }
    }
})();
