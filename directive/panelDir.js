app.directive('panelDir', function(){
    return {
      restrict: 'E',
      scope: {},
      transclude: {
        'panel-header': 'panelHeader',
        'panel-body': 'panelBody'
      },
      templateUrl: '/directive/panelDir.html'
    }
});