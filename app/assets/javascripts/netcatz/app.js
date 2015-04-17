'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'netcatz/templates/view1.html'
  });

  $routeProvider.otherwise({redirectTo: 'view1'});
}]);
