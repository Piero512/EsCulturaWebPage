var app = angular.module('esCultura', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/about', {
    templateUrl : 'pages/about.html'
  })

  .when('/contact', {
    templateUrl : 'pages/contact_us.html'
  })

});
