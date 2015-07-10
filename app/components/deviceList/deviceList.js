'use strict';

var deviceList = angular.module('myApp.deviceList', ['ngRoute']);

deviceList.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/deviceList', {
            templateUrl: 'components/deviceList/deviceList.html',
            controller: 'deviceListCtrl'
        });
    }
]);

deviceList.controller('deviceListCtrl', [
    function() {

    }
]);