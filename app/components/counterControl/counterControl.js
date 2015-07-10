'use strict';

angular.module('myApp.counterControl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/counterControl', {
    templateUrl: 'components/counterControl/counterControl.html',
    controller: 'counterControlCtrl'
  });
}])

.controller('counterControlCtrl', [function() {

}]);