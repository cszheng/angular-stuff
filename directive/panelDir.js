app.directive('panelDir', function(){
    return {
      restrict: 'E',
      scope: {},
      transclude: {
        'panel-header': '?panelHeader',
        'panel-body': 'panelBody',
        'panel-footer': '?panelFooter'
      },
      templateUrl: '/directive/panelDir.html'
    }
});