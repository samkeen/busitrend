angular.module('ListingService', []).factory('Listing', ['$http', function($http) {

  return {
    // call to get all nerds
    get : function() {
      return $http.get('/api/listings');
    }

    //// call to POST and create a new geek
    //create : function(listingsData) {
    //  return $http.post('/api/listings', listingsData);
    //},
    //
    //// call to DELETE a geek
    //delete : function(id) {
    //  return $http.delete('/api/listings/' + id);
    //}
  }

}]);