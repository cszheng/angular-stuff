app.service('addressSvc', ['$http', '$q', function($http, $q){
  var self = this;
  var baseUrl = 'api/address';

  self.getAddress = function() {
    //return $http.get(baseUrl + '/all');
    //totally real rest api call
    var defer = $q.defer();
    setTimeout(function() {
      defer.resolve(apiData[0]);
    }, TIMEOUT_CONST);
    return defer.promise;
  }

  //totally real rest api data
  var apiData = [
    { 
      "street_line_1": "2050 North Decatur Road",
      "street_line_2": null,
      "city": "Decatur",
      "state": "GA",
      "zip": 30033,
      "country": "USA"
    }
  ];
}]);