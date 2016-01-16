app.controller('navigationCtrl', ['uiStateSvc', function(uiStateSvc) {
	var self = this;
	//view models
	self.vm = {};
	self.vm.obj = null;
	//controller functions

	//initializing vm
	uiStateSvc
		.getUiState()
		.then(function(data){
			//data retrieve success
			self.vm.obj = data;
		}, function(err) {
			//data retrieve error
			console.log(err);
		})
}]);
