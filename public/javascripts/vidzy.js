//var app = angular.module('Vidzy', []);
//added dependencies of ngRoute (Angular module)
var app = angular.module('Vidzy', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);