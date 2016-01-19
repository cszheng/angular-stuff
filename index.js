var TIMEOUT_CONST = 100;

var app = angular.module('restaurantapp', ['ngRoute', 'ngAnimate', 'ui.router', 'ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	app.stateProvider = $stateProvider;
  app.urlRouterProvider = $urlRouterProvider;
  //defer intecepting 
  $urlRouterProvider.deferIntercept();
}]);

app.run(['$state', '$location', 'uiStateSvc', function ($state, $location, uiStateSvc) {
	//retrieve ui sates
	uiStateSvc
		.getUiState()
		.then(function(data){
			var uiSates = data;  		 
		  //setup states
			uiSates.forEach(function(value, index, array) {
				var stateObj = {};
				stateObj.url = '/' + value.stateName;
				if (value.nestedOption.length > 0) {
					stateObj.url += '/:param1';
				}
				stateObj.templateUrl = '/' + value.templateUrl;
				app.stateProvider.state(value.stateName, stateObj);				
			});
	    //configure base state, this doesnt seem to be working
			app.urlRouterProvider.otherwise('/' + uiSates[0].stateName);
			//go to current path
			var curPath = $location.$$path.replace(/\//g, '');
			if(curPath === "") {
				$state.go(uiSates[0].stateName);
			}
			else{
				$state.go(curPath);
			}
		}, function(err) {
			//data retrieve error
			console.log(err);
		});
}]);