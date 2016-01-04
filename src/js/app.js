angular.module('Rocchiapp', [
  'ngRoute',
  'mobile-angular-ui',
  'Rocchiapp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});