angular.module('otherApp')
    .factory('routingProperties', function() {
        var newsProperties = {
            route: '=',
            updateData: '&'
        };
        return newsProperties;
    });