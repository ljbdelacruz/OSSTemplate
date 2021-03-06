'use strict';

/* Create module for navbar directive */
angular.module('directives.navbar', [])

/**
 * navigationBar directive
 */
.directive('navbar', ['$location',
    function($location) {
        function preFn(scope, element, attr) {
            /* TODO: Do something here before post function */
        }
        /* Do the directive's logic here */
        function postFn(scope, element, attr) {
            scope.items = [{ name: 'Home', path: '/Home' }, { name: 'Templates', path: '/Templates' },
                { name: 'Contact Us', path: '' }, { name: 'About Us', path: '' }
            ];
            scope.goto = function(path) {
                alert("Goto");
                $location.path(path);
            };
        }
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/navbar/navbar.html',
            compile: function(scope, element, attr) {
                return {
                    pre: preFn,
                    post: postFn
                }
            }
        };
    }
]);