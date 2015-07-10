'use strict';

var counterControl = angular.module('myApp.counterControl', ['ngRoute']);

counterControl.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/counterControl', {
            templateUrl: 'components/counterControl/counterControl.html',
            controller: 'CounterControlCtrl'
        });
    }
]);

counterControl.controller('CounterControlCtrl', ['$scope', 'WebsocketService',
    function($scope, WebsocketService) {
        $scope.startCounter = function() {
            console.log("Start counter");
            WebsocketService.startCounter();
        };

        $scope.stopCounter = function() {
            console.log("Stop counter");
            WebsocketService.stopCounter();
        };
    }
]);
