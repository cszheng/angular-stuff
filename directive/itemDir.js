app.directive('itemDir', function(){
    return {
      restrict: 'E',
      scope: {},
      bindToController: {
      	item: "="
      },
      templateUrl: '/directive/itemDir.html',
      controller: function() {
      	var self = this;
        //functions on controller
        self.displayAsCurrency = function(value){
          return '$' + value.toFixed(2);
        }
      },
      controllerAs: "ctrl"
    }
});