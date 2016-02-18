app.controller('welcomeCtrl', ['menuSvc', function(menuSvc) {
	var self = this;
	//constants
	var CONST_POPITEMCNT = 4;
	//variables bound to controller
	self.popularDish =  null;
	//initializer
	//retrieve menu from services
	menuSvc
		.getPopularItems(CONST_POPITEMCNT)
		.then(function(data) {
			//data retrieve success
			self.popularDish = data;
		}, function(err) {
			//data retrieve error
			console.log(err);
		});
}]);