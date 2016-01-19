app.service('uiStateSvc', ['$http', '$q', function($http, $q){
  var baseUrl = 'api/uiState';

  this.getUiState = function() {
    //return $http.get(baseUrl + '/all');
    //totally real rest api call
    var defer = $q.defer();
    setTimeout(function() {
      apiData = apiData.sort(function(objA, objB){
        return objA.defaultSort - objB.defaultSort;  
      });
      defer.resolve(apiData);
    }, TIMEOUT_CONST);
    return defer.promise;
  }

  //totally real rest api data
  var apiData = [
    { 
      "stateName": "welcome",
      "templateUrl": "view/welcome.html",
      "securityLevel": 0,
      "defaultSort": 0,
      "nestedOption": []
    },
    { 
      "stateName": "location",
      "templateUrl": "view/location.html",
      "securityLevel": 0,
      "defaultSort": 2,
      "nestedOption": []
    },  
    { 
      "stateName": "menu",
      "templateUrl": "view/menu.html",
      "securityLevel": 0,
      "defaultSort": 1,
      "nestedOption": 
      [
        {          
          "optionName": "appetizers",
          "defaultSort": 0
        },
        {
          "optionName": "entree",
          "defaultSort": 1
        },
        {
          "optionName": "soup",
          "defaultSort": 2
        },
        {
          "optionName": "salad",
          "defaultSort": 3
        }
      ]
    }
  ];
}]);