'use strict';

/* Wait for all resources to be downloaded */
angular
    .element(document)
    .ready(function() {
        /**
        * ngStarterKit Module
        *
        * Description:
        *   A simple boilerplate for angularjs developers
        */
        angular.module('ngStarterKit', [
                'ngRoute',
                /* Directives */
                /* Modules */
            ])
            .config(['$routeProvider',
                     function($routeProvider) {
                $routeProvider.otherwise({ redirectTo : '/Dashboard' });
            }]);

        /* Start the angular app */
        angular.bootstrap(document, ['ngStarterKit']);
    });
