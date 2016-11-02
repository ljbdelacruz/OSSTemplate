'use strict';

angular.module('modules.templates', [])

.config(['$routeProvider',
    function($routeProvider) {
        /* Handle route on location path is '/' */
        $routeProvider.when('/Templates', {
            templateUrl: 'app/modules/templates/templates.html',
            controller: 'TemplatesCtrl'
        });
    }
]);