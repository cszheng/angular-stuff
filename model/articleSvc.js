app.service('articleSvc', ['$http', '$q', function($http, $q){
  var self = this;
  var baseUrl = 'api/article';

  self.getArticle = function() {
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
      "publisher": "PR Webs",
      "url": "http://www.prweb.com/releases/RiceMacGivesBack/atBacktoSchoolTime/prweb12914828.htm"   
    },
    { 
      "publisher": "ABC News",
      "url": "http://abc3340.com/story/29839571/rice-mac-new-decatur-restaurant-gives-back-at-back-to-school-time"   
    }
  ];
}]);