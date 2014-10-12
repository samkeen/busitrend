angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    // nerds page that will use the ListingController
    .when('/listings', {
      templateUrl: 'views/listing.html',
      controller: 'ListingController'
    })

  $locationProvider.html5Mode(true);

}]);
