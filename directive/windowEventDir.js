app.directive('windowEventDir', ['$window', '$rootScope', function($window, $rootScope) {
	return  {		
		restrinc: 'A',
		scope: {},
		bindToController: {},
		controller: function() {
			var self = this;
			self.broadcastResize = function() {
				$rootScope.$broadcast('window-resize');
			}
			self.broadcastScroll = function() {
				$rootScope.$broadcast('window-scroll');	
			}
		},
		controllerAs: 'windowEventCtrl',
		link: function(scope, elem, attr, ctrl) {
			angular.element($window).bind('resize', function() {
				ctrl.broadcastResize();
			});
			angular.element($window).bind("scroll", function() {
        ctrl.broadcastScroll();
      });
		}
	}
}]);