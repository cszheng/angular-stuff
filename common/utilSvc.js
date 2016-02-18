app.service('utilSvc', [function(){
  var self = this;
  self.capitalize = function(word) {
    if(word !== null) {
      return word.replace(/\w\S*/g, function(text) {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
      });
    }
  }
}]);