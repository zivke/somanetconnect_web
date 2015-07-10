'use strict';

var counterControl = angular.module('myApp.counterControl', ['ngRoute']);

counterControl.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/counterControl', {
            templateUrl: 'components/counterControl/counterControl.html',
            controller: 'counterControlCtrl'
        });
    }
]);

counterControl.controller('counterControlCtrl', [
    function() {

    }
]);