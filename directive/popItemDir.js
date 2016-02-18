app.directive('popItemDir', function(){
    return {
      restrict: 'E',
      scope: {},
      bindToController: {
      	item: "="
      },
      templateUrl: '/directive/popItemDir.html',
      controller: function() {
      	var self = this;
      },
      controllerAs: "ctrl"
    }
});