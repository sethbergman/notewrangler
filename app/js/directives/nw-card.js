angular.module('NoteWrangler').directive('nwCard', [function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/nw-card.html',
    controller: function() {
      this.header = 'Note Title';
      this.description = 'A lovely note description.';
    },
    controllerAs: 'card'
  };
}]);
