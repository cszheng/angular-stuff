app.service('uiStateSvc', ['$http', '$q', function($http, $q){
  var baseUrl = 'api/uiState';

  this.getUiState = function() {
    //return $http.get(baseUrl + '/all');
    //totally real rest api call
    var defer = $q.defer();
    setTimeout(function() {
      defer.resolve(apiData);
    }, TIMEOUT_CONST);
    return defer.promise;
  }

  //totally real rest api data
  var apiData = [
    { 
      "stateName": "welcome",
      "templateUrl": "/static/view/welcome",
      "securityLevel": 0,
      "defaultSort": 0,
      "nestedOption": []
    },
    { 
      "stateName": "location",
      "templateUrl": "/static/view/location",
      "securityLevel": 0,
      "defaultSort": 2,
      "nestedOption": []
    },  
    { 
      "stateName": "menu",
      "templateUrl": "/static/view/menu",
      "securityLevel": 0,
      "defaultSort": 1,
      "nestedOption": 
      [
        {
          "paramUrl": "/:appetizers",
          "defaultSort": 0
        },
        {
          "paramUrl": "/:entree",
          "defaultSort": 1
        },
        {
          "paramUrl": "/:soup",
          "defaultSort": 2
        },
        {
          "paramUrl": "/:salad",
          "defaultSort": 3
        }
      ]
    }
  ];
}]);