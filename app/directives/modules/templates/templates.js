'use strict';

/* Create module for navbar directive */
angular.module('directives.templates', [])

/**
 * navigationBar directive
 */
.directive('templates', ['$location',
    function($location) {
        function preFn(scope, element, attr) {
            /* TODO: Do something here before post function */
        }
        /* Do the directive's logic here */
        function postFn(scope, element, attr) {}
        return {
            restrict: 'E',
            replace: true,
            scope: {
                items: '='
            },
            templateUrl: 'app/directives/modules/templates/templates.html',
            compile: function(scope, element, attr) {
                return {
                    pre: preFn,
                    post: postFn
                }
            }
        };
    }
]);