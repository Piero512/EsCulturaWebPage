var app = angular.module('esCultura', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'pages/home.html'
  })
  .when('/about', {
    templateUrl : 'pages/about.html'
  })
  .when('/what_we_do',{
    templateUrl : 'pages/what_we_do.html'
  })
  .when('/contact', {
    templateUrl : 'pages/contact_us.html'
  })

});
