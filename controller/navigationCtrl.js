app.controller('navigationCtrl', ['$window', '$scope', 'uiStateSvc', function($window, $scope, uiStateSvc) {
	var self = this;
	//variables bound to controller
	self.uiState = null;
	self.collapseNav = true;
	
	//functions bound to controller
	//toggle collapse variable
	self.toggleCollapse = function() {
		self.collapseNav = !self.collapseNav;
	}
	//capitalize a word
	self.capitalizeUiState = function(stateName) {
		return stateName.replace(/\w\S*/g, function(text) {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
	}

	//retrieve uiState from services
	uiStateSvc
		.getUiState()
		.then(function(data){
			//data retrieve success
			self.uiState = data;
		}, function(err) {
			//data retrieve error
			console.log(err);
		});
	//some magic with $scope, to make navigation affixed
	$scope.outOfView = false;
	var brandHeaderElem = document.querySelector('#brand-header');
	var brandHeaderHeight = brandHeaderElem.scrollHeight;
	//update the header height on resize
	angular.element($window).bind('resize', function() {
		brandHeaderHeight = brandHeaderElem.scrollHeight;
	});
	//update the outOfView flag on scroll
	angular.element($window).bind("scroll", function() {
		$scope.outOfView = brandHeaderElem.getBoundingClientRect().top + brandHeaderHeight <= 0;
		$scope.$apply();
  });
}]);
