'use strict';

angular.module('myApp.deviceList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/deviceList', {
    templateUrl: 'components/deviceList/deviceList.html',
    controller: 'deviceListCtrl'
  });
}])

.controller('deviceListCtrl', [function() {

}]);