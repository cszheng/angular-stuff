app.controller('menuCtrl', ['$window', '$stateParams', 'menuSvc', function($window, $stateParams, menuSvc) {
	var self = this;
	//variables bound to controller
	self.menu =  null;
	self.navCategory = $stateParams.param1 ? $stateParams.param1 : null;
	//functions bound to controller
	//catetializes words
	self.capitalizeWords = function(word) {
		if(word !== null) {
			return word.replace(/\w\S*/g, function(text) {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    	});
		}
	}	

	//private functions
	var scrollToCategory = function() {
		var scrollToElem = document.querySelector('div[category=' + self.navCategory + ']');
		if(scrollToElem !== null) {
			var elementTop = scrollToElem.offsetTop;
			var scrollOffset = 200;
			setTimeout(function(){
				$window.scrollTo(0, elementTop - scrollOffset);
			}, TIMEOUT_CONST);
		}
		else{
			setTimeout(scrollToCategory, TIMEOUT_CONST);
		}
	}

	//initializer
	//retrieve menu from services
	menuSvc
		.getMenu()
		.then(function(data) {
			//data retrieve success
			self.menu = data;
		}, function(err) {
			//data retrieve error
			console.log(err);
		})
		.then(function(){
			//go to category directed by navigation
			if(self.navCategory !== null){
				scrollToCategory();					
			}
		});
}]);