'use strict';

/* Create module for navbar directive */
angular.module('directives.multiNavbar', [])

/**
 * navigationBar directive
 */
.directive('multiNavbar', ['$location',
    function($location) {
        function preFn(scope, element, attr) {
            /* TODO: Do something here before post function */
        }
        /* Do the directive's logic here */
        function postFn(scope, element, attr) {
            scope.goto = function(path) {
                alert("Goto");
                $location.path(path);
            };
        }
        return {
            restrict: 'E',
            replace: true,
            scope: {
                items: '='
            },
            templateUrl: 'app/directives/multiNavbar/multiNavbar.html',
            compile: function(scope, element, attr) {
                return {
                    pre: preFn,
                    post: postFn
                }
            }
        };
    }
]);